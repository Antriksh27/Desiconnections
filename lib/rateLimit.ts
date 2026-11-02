// Simple in-memory sliding window rate limiter by IP
// Safe for serverless/edge instances without external dependencies

interface RateLimitRecord {
  timestamps: number[];
}

const rateLimitMap = new Map<string, RateLimitRecord>();

// Cleanup stale records periodically
const CLEANUP_INTERVAL_MS = 10 * 60 * 1000;
let lastCleanup = Date.now();

function cleanup() {
  const now = Date.now();
  if (now - lastCleanup < CLEANUP_INTERVAL_MS) return;
  lastCleanup = now;

  const threshold = now - 15 * 60 * 1000;
  for (const [ip, record] of rateLimitMap.entries()) {
    record.timestamps = record.timestamps.filter((ts) => ts > threshold);
    if (record.timestamps.length === 0) {
      rateLimitMap.delete(ip);
    }
  }
}

export function checkRateLimit(
  ip: string,
  maxRequests = 5,
  windowSeconds = 300
): { allowed: boolean; remaining: number } {
  cleanup();

  const now = Date.now();
  const windowStart = now - windowSeconds * 1000;

  const record = rateLimitMap.get(ip) || { timestamps: [] };
  // Filter timestamps within the current sliding window
  const recentTimestamps = record.timestamps.filter((ts) => ts > windowStart);

  if (recentTimestamps.length >= maxRequests) {
    return {
      allowed: false,
      remaining: 0,
    };
  }

  recentTimestamps.push(now);
  rateLimitMap.set(ip, { timestamps: recentTimestamps });

  return {
    allowed: true,
    remaining: maxRequests - recentTimestamps.length,
  };
}

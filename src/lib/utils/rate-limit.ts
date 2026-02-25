type RateLimitEntry = {
  count: number;
  resetTime: number;
};

const rateLimitMaps = new Map<string, Map<string, RateLimitEntry>>();

function getBucket(name: string): Map<string, RateLimitEntry> {
  if (!rateLimitMaps.has(name)) {
    rateLimitMaps.set(name, new Map());
  }
  return rateLimitMaps.get(name)!;
}

export function createRateLimiter(
  name: string,
  config: { windowMs: number; maxRequests: number }
) {
  return {
    check(identifier: string): { allowed: boolean; retryAfter?: number } {
      const map = getBucket(name);
      const now = Date.now();
      const entry = map.get(identifier);

      if (!entry || now > entry.resetTime) {
        map.set(identifier, { count: 1, resetTime: now + config.windowMs });
        return { allowed: true };
      }

      if (entry.count >= config.maxRequests) {
        const retryAfter = Math.ceil((entry.resetTime - now) / 1000);
        return { allowed: false, retryAfter };
      }

      entry.count += 1;
      return { allowed: true };
    },
  };
}

export function getClientIP(request: Request): string {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) {
    const ip = forwarded.split(",")[0]?.trim();
    if (ip) return ip;
  }
  return request.headers.get("x-real-ip") || "unknown";
}

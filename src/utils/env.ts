import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "@zod/mini";

export const env = createEnv({
	server: {
		NODE_ENV: z.enum(["development", "production", "test"]),
		OPEN_WEATHER_API_KEY: z.string().check(z.minLength(1)),
	},
	runtimeEnv: {
		NODE_ENV: process.env.NODE_ENV,
		OPEN_WEATHER_API_KEY: process.env.OPEN_WEATHER_API_KEY,
	},
});

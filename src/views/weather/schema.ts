import { z } from "@zod/mini";

export const supportRegionSchema = z.enum(["Tokyo", "Hyogo", "Oita", "Hokkaido"]);

export type SupportRegion = z.infer<typeof supportRegionSchema>;

export const supportRegionNameMap = {
	Tokyo: "東京",
	Hyogo: "兵庫",
	Oita: "大分",
	Hokkaido: "北海道",
} as const satisfies Record<SupportRegion, string>;

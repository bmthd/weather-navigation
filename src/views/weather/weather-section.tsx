'use client'
import { FC } from "react";
import { useWeather } from "./query";
import { SupportRegion } from "./schema";
import { WeatherItem } from "./weather-item";

export const WeatherSection: FC<{region: SupportRegion}>= ({ region }) => {
	const { data } = useWeather({ region });
	return (
		<ul>
			{data.list.map((item) => (
				<li key={item.dt}>
					<WeatherItem item={item} />
				</li>
			))}
		</ul>
	);
};

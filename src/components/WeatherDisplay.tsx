'use client'
import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { Typography } from 'antd';
import { CloudOutlined, EnvironmentOutlined, SunOutlined } from '@ant-design/icons';
import WindPowerIcon from '@mui/icons-material/WindPower';

const WeatherDisplay: React.FC = () => {
  const cities = useSelector((state: RootState) => state.weather.cities);

  return (
    <div>
      {cities.map((city) => (
        <div key={city.city}>
          <Typography.Title level={2} style={{display:'flex',gap:10}}> <EnvironmentOutlined/>{city.city}</Typography.Title>
          <Typography style={{display:'flex',gap:10}}><SunOutlined/>Temperature: {city.temperature}°C</Typography>
          <Typography style={{display:'flex',gap:10}}><CloudOutlined /> Hunidity : {city.humidity} %</Typography>
          <Typography><WindPowerIcon/> Wind Speed : {city.wind} m/s</Typography>
        </div>
      ))}
    </div>
  );
};

export default WeatherDisplay;

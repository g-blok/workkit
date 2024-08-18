import React, { useEffect, useState } from 'react';
import IconButton from '@mui/material/IconButton';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import { GetColorName } from 'hex-color-to-color-name';


interface ColorTile {
    color: string;
    name?: string;
}

const defaultColors = [
  {
    color: '#FFD994',
  },
  {
    color: '#F0AC1D',
  },
  {
    color: '#ED7855',
  }
]

const PaletteGeneratorPage: React.FC = () => {
  const [colors, setColors] = useState<ColorTile[]>(defaultColors);

  useEffect(() => {
    const updatedColors = colors.map((colorItem) => ({
      ...colorItem,
      name: GetColorName(colorItem.color),
    }));
    setColors(updatedColors);
  }, []);

  const addColor = (color: string) => {
    setColors([...colors, {color}])
  }

  return (
    <div className='flex gap-4 items-center'>
      <div className='flex w-full h-96 mx-auto overflow-hidden rounded-lg'>
        {colors.map((colorItem) => (
          <div
            key={colorItem.color}
            className="flex-grow min-w-[100px] p-4"
            style={{ backgroundColor: colorItem.color }}
          >
            <div className="text-white text-lg font-semibold text-center">
              {GetColorName(colorItem.color)}
            </div>
          </div>
        ))}
      </div>
      <IconButton className="w-16 h-16" size="large" color="primary" aria-label="add color to palette">
        <AddRoundedIcon />
      </IconButton>
    </div>
  );
};

export default PaletteGeneratorPage;

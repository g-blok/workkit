import React, { useEffect, useState } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';


interface Image {
    image?: File
}

const BackgroundRemoverPage: React.FC = () => {
  const [image, setImage] = useState<Image[]>([]);

  return (
    <div className='flex gap-8'>
      <div>
        <div className='w-96 min-h-96 border-4 bg-gray rounded-xl'>
            <div className='p-4 text-gray'>Preview</div>
        </div>
        <List className='flex justify-center'>
          <ListItem key={'ZoomOut'} disablePadding sx={{ display: 'block' }}>
            <ListItemButton
              sx={{
                minHeight: 48,
                minWidth: 48,
                Height: 48,
                Width: 48,
                justifyContent: 'center',
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: 'auto',
                  justifyContent: 'center',
                }}
              >
                { <RemoveIcon /> }
              </ListItemIcon>
            </ListItemButton>
          </ListItem>
          <ListItem key={'ZoomIn'} disablePadding sx={{ display: 'block' }}>
            <ListItemButton
              sx={{
                minHeight: 48,
                minWidth: 48,
                Height: 48,
                Width: 48,
                justifyContent: 'center',
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: 'auto',
                  justifyContent: 'center',
                }}
              >
                { <AddIcon /> }
              </ListItemIcon>
            </ListItemButton>
          </ListItem>
        </List>
      </div>
      <div className='flex flex-col'>
        <button>
            Add Background
        </button>
        <button>
            Erase/Restore
        </button>
        <button>
            Resolution
        </button>
        <button>
            Download
        </button>
      </div>
    </div>
  );
};

export default BackgroundRemoverPage;

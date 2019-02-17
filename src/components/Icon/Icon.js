import React from 'react';

import IconRight from './Assets/IconRight';
import IconWrong from './Assets/IconWrong';
import IconSkip from './Assets/IconSkip';

const Icon = ({ name }) => {
    const icons = {
        Right: IconRight,
        Wrong: IconWrong,
        Skip: IconSkip,
    }
    const CustomIcon = (typeof name === 'string') && icons[name];
    
    return (
        (CustomIcon ? <CustomIcon/> : name)
    );
  };

export default Icon;
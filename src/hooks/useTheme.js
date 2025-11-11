import { useMemo } from 'react';

export const useTheme = (isDark) => {
  return useMemo(() => ({
    bg: isDark ? 'bg-gray-900' : 'bg-white',
    text: isDark ? 'text-gray-100' : 'text-gray-900',
    textSecondary: isDark ? 'text-gray-400' : 'text-gray-600',
    card: isDark ? 'bg-gray-800' : 'bg-white',
    cardHover: isDark ? 'hover:bg-gray-750' : 'hover:bg-gray-50',
    border: isDark ? 'border-gray-700' : 'border-gray-200',
    gradient: isDark ? 'from-gray-800 via-gray-900 to-black' : 'from-[#2970ae]/10 via-[#ec960b]/10 to-[#c17b3f]/10',
    navBg: isDark ? 'bg-gray-900/95' : 'bg-white/95'
  }), [isDark]);
};


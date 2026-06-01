import type { TabButtonProps } from '@/types';

export const TabButton: React.FC<TabButtonProps> = ({
  label,
  isActive,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      type='button'
      className={`text-left pl-4 py-1 border-s-4 transition-all duration-200 text-base md:text-xl font-medium w-full ${
        isActive
          ? 'border-primary-200 text-main-color font-semibold'
          : 'border-transparent text-neutral-600 hover:text-zinc-400'
      }`}
    >
      {label}
    </button>
  );
};

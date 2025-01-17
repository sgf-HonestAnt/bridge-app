type TooltipProps = {
  children: React.ReactNode;
  content: string;
};

const Tooltip: React.FC<TooltipProps> = ({ children, content }) => {
  return (
    <div className='relative group'>
      {children}
      <div className='hidden group-hover:block absolute -bottom-10 z-10 bg-white p-1 px-2 rounded-md shadow-md'>
        <p className='text-xs text-gray-700'>{content}</p>
      </div>
    </div>
  );
};

export default Tooltip;

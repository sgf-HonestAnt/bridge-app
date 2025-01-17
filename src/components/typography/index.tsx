type HeadingProps = React.HTMLAttributes<HTMLHeadingElement>;

export const HeaderOne: React.FC<HeadingProps> = ({ children }) => (
  <h1 className='text-4xl font-bold text-center sm:text-left'>{children}</h1>
);

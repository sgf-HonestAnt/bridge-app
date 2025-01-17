type HeadingProps = React.HTMLAttributes<HTMLHeadingElement>;

export const HeaderOne: React.FC<HeadingProps> = ({ children }) => (
  <h1 className='text-4xl font-bold text-center sm:text-left'>{children}</h1>
);

export const HeaderTwo: React.FC<HeadingProps> = ({ children }) => (
  <h2 className='text-3xl font-bold text-center sm:text-left'>{children}</h2>
);

export const HeaderThree: React.FC<HeadingProps> = ({ children }) => (
  <h3 className='text-2xl font-bold text-center sm:text-left'>{children}</h3>
);

export const HeaderFour: React.FC<HeadingProps> = ({ children }) => (
  <h4 className='text-xl font-bold text-center sm:text-left'>{children}</h4>
);

export const HeaderFive: React.FC<HeadingProps> = ({ children }) => (
  <h5 className='text-lg font-bold text-center sm:text-left'>{children}</h5>
);

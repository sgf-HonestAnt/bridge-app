interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "danger" | "warning";
}

export const Button: React.FC<ButtonProps> = ({ variant, ...props }) => {
  switch (variant) {
    case "primary":
      return <Primary {...props} />;
    case "secondary":
      return <Secondary {...props} />;
    case "danger":
      return <Danger {...props} />;
    case "warning":
      return <Warning {...props} />;
  }
};

const Primary: React.FC<ButtonProps> = ({ children, ...props }) => (
  <button className='bg-blue-500 text-white px-4 py-2 rounded-xl' {...props}>
    {children}
  </button>
);

const Secondary: React.FC<ButtonProps> = ({ children, ...props }) => (
  <button className='bg-green-500 text-white px-4 py-2 rounded-xl' {...props}>
    {children}
  </button>
);

const Danger: React.FC<ButtonProps> = ({ children, ...props }) => (
  <button className='bg-red-500 text-white px-4 py-2 rounded-xl' {...props}>
    {children}
  </button>
);

const Warning: React.FC<ButtonProps> = ({ children, ...props }) => (
  <button className='bg-yellow-500 text-white px-4 py-2 rounded-xl' {...props}>
    {children}
  </button>
);

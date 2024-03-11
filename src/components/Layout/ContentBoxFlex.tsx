interface ContentBoxFlexProps {
  children: React.ReactNode;
}

const ContentBoxFlex: React.FC<ContentBoxFlexProps> = ({
  children,
}: ContentBoxFlexProps) => {
  return (
    <div className="flex lg:flex-nowrap flex-wrap bg-white bg-opacity-20 backdrop-blur-lg rounded-lg shadow-md p-10 m-7 overflow-auto">
      {children}
    </div>
  );
};

export default ContentBoxFlex;

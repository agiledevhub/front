interface SidebarButtonProps {
  bgImage?: string;
  image?: string;
  onClick?: () => void;
}

export const SidebarButton = (props: SidebarButtonProps) => {
  const bgImage = props.bgImage ?? '';
  return (
    <div
      className='w-10 h-10 rounded-lg flex items-center justify-center bg-center bg-cover bg-no-repeat hover:cursor-pointer transition-all duration-200 hover:scale-110 hover:rounded-md'
      style={{ backgroundImage: `url('${bgImage}')` }}
      onClick={props.onClick}
    >
      {props.image && (
        <img src={props.image} alt='Sidebar Button' className='w-full h-full' />
      )}
    </div>
  );
};

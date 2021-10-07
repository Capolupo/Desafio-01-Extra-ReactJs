interface SidebarItemProps {
  genre: {
    id: number;
    name: string;
    title: string;
  }
}

export function SideBar(props: SidebarItemProps) {
  // Complete aqui
  //<!-- Sidebar -->
  return (
    <li>
      <strong>{props.genre.name}</strong>
    </li>  
  );

}
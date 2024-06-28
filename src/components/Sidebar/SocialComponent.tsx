import { TSocialSidebar } from "../../types/TSocialSidebar";

interface SocialComponentProps {
  sidebarItem: TSocialSidebar;
}

/**
 * Renders a social component with a link to the specified `sidebarItem.href`.
 *
 * @param {SocialComponentProps & React.HTMLProps<HTMLAnchorElement>} props - The props object containing the `sidebarItem` and `children` properties.
 * @param {TSocialSidebar} props.sidebarItem - The social sidebar item containing the `href` property.
 * @param {React.ReactNode} props.children - The content to be rendered inside the anchor tag.
 * @return {JSX.Element} The rendered social component.
 */
const SocialComponent: React.FC<
  SocialComponentProps & React.HTMLProps<HTMLAnchorElement>
> = ({
  sidebarItem,
  children,
}: SocialComponentProps & React.HTMLProps<HTMLAnchorElement>): JSX.Element => (
  <a href={sidebarItem.href} className="m-2 p-2 rounded block ">
    {children}
  </a>
);

export default SocialComponent;

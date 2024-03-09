import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import TableChartIcon from "@mui/icons-material/TableChart";
import AddBoxIcon from "@mui/icons-material/AddBox";
import WindowIcon from "@mui/icons-material/Window";

type Button = {
  label: string;
  icon: JSX.Element;
  url: string;
};

const primaryButtons: Button[] = [
  {
    label: "Home",
    icon: <WindowIcon />,
    url: "",
  },
];

const secundaryButtons: Button[] = [
  {
    label: "List",
    icon: <TableChartIcon />,
    url: "list",
  },
  {
    label: "Add",
    icon: <AddBoxIcon />,
    url: "add",
  },
];

function Item({ label, url, icon }: Button) {
  return (
    <ListItem key={label} disablePadding>
      <ListItemButton href={url}>
        {icon}
        <span className="ml-8 text-lg">{label}</span>
      </ListItemButton>
    </ListItem>
  );
}

export default function Navbar() {
  return (
    <div className="w-56 bg-white shadow-lg text-darkGrey font-medium">
      <List>
        {primaryButtons.map(({ label, icon, url }) => (
          <Item label={label} icon={icon} url={url} key={label} />
        ))}
      </List>
      <Divider />
      <List>
        {secundaryButtons.map(({ label, icon, url }) => (
          <Item label={label} icon={icon} url={url} key={label} />
        ))}
      </List>
    </div>
  );
}

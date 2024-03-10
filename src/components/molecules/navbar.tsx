import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import BackupTableOutlinedIcon from "@mui/icons-material/BackupTableOutlined";
import RouteOutlinedIcon from "@mui/icons-material/RouteOutlined";

type Button = {
  label: string;
  icon: JSX.Element;
  url: string;
};

const primaryButtons: Button[] = [
  {
    label: "Home",
    icon: <HomeOutlinedIcon />,
    url: "",
  },
];

const secundaryButtons: Button[] = [
  {
    label: "List",
    icon: <BackupTableOutlinedIcon />,
    url: "list",
  },
  {
    label: "Add",
    icon: <AddCircleOutlineOutlinedIcon />,
    url: "add",
  },
  {
    label: "Path",
    icon: <RouteOutlinedIcon />,
    url: "path",
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
    <div className="w-56 bg-white shadow-lg text-darkGrey font-medium fixed h-full z-50">
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

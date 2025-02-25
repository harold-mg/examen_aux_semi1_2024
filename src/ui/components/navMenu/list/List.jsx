import useStyles from "./NavMenu.styles";
export const List = (props) => {
  const { data } = props;
  const classes = useStyles();

  return (
    <nav className={classes.wrapper}>
      <ul>
        {data.map((item) => (
          <li key={item._id}>  {/* Aquí le asignamos el "key" único */}
            <a href="/">{item.username}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};



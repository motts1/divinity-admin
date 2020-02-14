import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import Switch from "@material-ui/core/Switch";
import PaletteIcon from "@material-ui/icons/Palette";
import CompareArrowsIcon from "@material-ui/icons/CompareArrows";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import AdminTable from "./AdminTable"

import { toggleThemeMode, swapThemeColors } from "../../store/reducers/settings";
import OrdersList from './OrdersList'

const Orders = props => (
  <div>
      <OrdersList />
<AdminTable />
  </div>
);

const mapStateToProps = state => {
  return {
    settings: state.settings
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      toggleThemeMode: checked => toggleThemeMode(checked),
      swapThemeColors: checked => swapThemeColors(checked)
    },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Orders);

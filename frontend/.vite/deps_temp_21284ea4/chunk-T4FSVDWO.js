import {
  ToggleButtonGroupButtonContext_default,
  ToggleButtonGroupContext_default,
  getToggleButtonUtilityClass,
  toggleButtonClasses_default
} from "./chunk-GLEGKSIY.js";
import {
  ButtonBase_default
} from "./chunk-ND7H2VGD.js";
import {
  alpha
} from "./chunk-4OCX5IFV.js";
import {
  capitalize_default,
  init_capitalize
} from "./chunk-XKAQDVY4.js";
import {
  _extends,
  _objectWithoutPropertiesLoose,
  clsx_default,
  composeClasses,
  init_clsx,
  init_composeClasses,
  init_extends,
  init_objectWithoutPropertiesLoose,
  init_resolveProps,
  init_styled,
  init_useThemeProps2 as init_useThemeProps,
  require_jsx_runtime,
  require_prop_types,
  resolveProps,
  styled_default,
  useThemeProps2 as useThemeProps
} from "./chunk-WLXAUIGP.js";
import {
  require_react
} from "./chunk-UM3JHGVO.js";
import {
  __toESM
} from "./chunk-CEQRFMJQ.js";

// node_modules/@mui/material/ToggleButton/ToggleButton.js
init_objectWithoutPropertiesLoose();
init_extends();
var React = __toESM(require_react());
var import_prop_types = __toESM(require_prop_types());
init_clsx();
init_resolveProps();
init_composeClasses();
init_capitalize();
init_useThemeProps();
init_styled();

// node_modules/@mui/material/ToggleButtonGroup/isValueSelected.js
function isValueSelected(value, candidate) {
  if (candidate === void 0 || value === void 0) {
    return false;
  }
  if (Array.isArray(candidate)) {
    return candidate.indexOf(value) >= 0;
  }
  return value === candidate;
}

// node_modules/@mui/material/ToggleButton/ToggleButton.js
var import_jsx_runtime = __toESM(require_jsx_runtime());
var _excluded = ["value"];
var _excluded2 = ["children", "className", "color", "disabled", "disableFocusRipple", "fullWidth", "onChange", "onClick", "selected", "size", "value"];
var useUtilityClasses = (ownerState) => {
  const {
    classes,
    fullWidth,
    selected,
    disabled,
    size,
    color
  } = ownerState;
  const slots = {
    root: ["root", selected && "selected", disabled && "disabled", fullWidth && "fullWidth", `size${capitalize_default(size)}`, color]
  };
  return composeClasses(slots, getToggleButtonUtilityClass, classes);
};
var ToggleButtonRoot = styled_default(ButtonBase_default, {
  name: "MuiToggleButton",
  slot: "Root",
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.root, styles[`size${capitalize_default(ownerState.size)}`]];
  }
})(({
  theme,
  ownerState
}) => {
  let selectedColor = ownerState.color === "standard" ? theme.palette.text.primary : theme.palette[ownerState.color].main;
  let selectedColorChannel;
  if (theme.vars) {
    selectedColor = ownerState.color === "standard" ? theme.vars.palette.text.primary : theme.vars.palette[ownerState.color].main;
    selectedColorChannel = ownerState.color === "standard" ? theme.vars.palette.text.primaryChannel : theme.vars.palette[ownerState.color].mainChannel;
  }
  return _extends({}, theme.typography.button, {
    borderRadius: (theme.vars || theme).shape.borderRadius,
    padding: 11,
    border: `1px solid ${(theme.vars || theme).palette.divider}`,
    color: (theme.vars || theme).palette.action.active
  }, ownerState.fullWidth && {
    width: "100%"
  }, {
    [`&.${toggleButtonClasses_default.disabled}`]: {
      color: (theme.vars || theme).palette.action.disabled,
      border: `1px solid ${(theme.vars || theme).palette.action.disabledBackground}`
    },
    "&:hover": {
      textDecoration: "none",
      // Reset on mouse devices
      backgroundColor: theme.vars ? `rgba(${theme.vars.palette.text.primaryChannel} / ${theme.vars.palette.action.hoverOpacity})` : alpha(theme.palette.text.primary, theme.palette.action.hoverOpacity),
      "@media (hover: none)": {
        backgroundColor: "transparent"
      }
    },
    [`&.${toggleButtonClasses_default.selected}`]: {
      color: selectedColor,
      backgroundColor: theme.vars ? `rgba(${selectedColorChannel} / ${theme.vars.palette.action.selectedOpacity})` : alpha(selectedColor, theme.palette.action.selectedOpacity),
      "&:hover": {
        backgroundColor: theme.vars ? `rgba(${selectedColorChannel} / calc(${theme.vars.palette.action.selectedOpacity} + ${theme.vars.palette.action.hoverOpacity}))` : alpha(selectedColor, theme.palette.action.selectedOpacity + theme.palette.action.hoverOpacity),
        // Reset on touch devices, it doesn't add specificity
        "@media (hover: none)": {
          backgroundColor: theme.vars ? `rgba(${selectedColorChannel} / ${theme.vars.palette.action.selectedOpacity})` : alpha(selectedColor, theme.palette.action.selectedOpacity)
        }
      }
    }
  }, ownerState.size === "small" && {
    padding: 7,
    fontSize: theme.typography.pxToRem(13)
  }, ownerState.size === "large" && {
    padding: 15,
    fontSize: theme.typography.pxToRem(15)
  });
});
var ToggleButton = React.forwardRef(function ToggleButton2(inProps, ref) {
  const _React$useContext = React.useContext(ToggleButtonGroupContext_default), {
    value: contextValue
  } = _React$useContext, contextProps = _objectWithoutPropertiesLoose(_React$useContext, _excluded);
  const toggleButtonGroupButtonContextPositionClassName = React.useContext(ToggleButtonGroupButtonContext_default);
  const resolvedProps = resolveProps(_extends({}, contextProps, {
    selected: isValueSelected(inProps.value, contextValue)
  }), inProps);
  const props = useThemeProps({
    props: resolvedProps,
    name: "MuiToggleButton"
  });
  const {
    children,
    className,
    color = "standard",
    disabled = false,
    disableFocusRipple = false,
    fullWidth = false,
    onChange,
    onClick,
    selected,
    size = "medium",
    value
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded2);
  const ownerState = _extends({}, props, {
    color,
    disabled,
    disableFocusRipple,
    fullWidth,
    size
  });
  const classes = useUtilityClasses(ownerState);
  const handleChange = (event) => {
    if (onClick) {
      onClick(event, value);
      if (event.defaultPrevented) {
        return;
      }
    }
    if (onChange) {
      onChange(event, value);
    }
  };
  const positionClassName = toggleButtonGroupButtonContextPositionClassName || "";
  return (0, import_jsx_runtime.jsx)(ToggleButtonRoot, _extends({
    className: clsx_default(contextProps.className, classes.root, className, positionClassName),
    disabled,
    focusRipple: !disableFocusRipple,
    ref,
    onClick: handleChange,
    onChange,
    value,
    ownerState,
    "aria-pressed": selected
  }, other, {
    children
  }));
});
true ? ToggleButton.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: import_prop_types.default.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: import_prop_types.default.object,
  /**
   * @ignore
   */
  className: import_prop_types.default.string,
  /**
   * The color of the button when it is in an active state.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'standard'
   */
  color: import_prop_types.default.oneOfType([import_prop_types.default.oneOf(["standard", "primary", "secondary", "error", "info", "success", "warning"]), import_prop_types.default.string]),
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: import_prop_types.default.bool,
  /**
   * If `true`, the  keyboard focus ripple is disabled.
   * @default false
   */
  disableFocusRipple: import_prop_types.default.bool,
  /**
   * If `true`, the ripple effect is disabled.
   *
   * ⚠️ Without a ripple there is no styling for :focus-visible by default. Be sure
   * to highlight the element by applying separate styles with the `.Mui-focusVisible` class.
   * @default false
   */
  disableRipple: import_prop_types.default.bool,
  /**
   * If `true`, the button will take up the full width of its container.
   * @default false
   */
  fullWidth: import_prop_types.default.bool,
  /**
   * Callback fired when the state changes.
   *
   * @param {React.MouseEvent<HTMLElement>} event The event source of the callback.
   * @param {any} value of the selected button.
   */
  onChange: import_prop_types.default.func,
  /**
   * Callback fired when the button is clicked.
   *
   * @param {React.MouseEvent<HTMLElement>} event The event source of the callback.
   * @param {any} value of the selected button.
   */
  onClick: import_prop_types.default.func,
  /**
   * If `true`, the button is rendered in an active state.
   */
  selected: import_prop_types.default.bool,
  /**
   * The size of the component.
   * The prop defaults to the value inherited from the parent ToggleButtonGroup component.
   * @default 'medium'
   */
  size: import_prop_types.default.oneOfType([import_prop_types.default.oneOf(["small", "medium", "large"]), import_prop_types.default.string]),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types.default.oneOfType([import_prop_types.default.arrayOf(import_prop_types.default.oneOfType([import_prop_types.default.func, import_prop_types.default.object, import_prop_types.default.bool])), import_prop_types.default.func, import_prop_types.default.object]),
  /**
   * The value to associate with the button when selected in a
   * ToggleButtonGroup.
   */
  value: import_prop_types.default.any.isRequired
} : void 0;
var ToggleButton_default = ToggleButton;

export {
  ToggleButton_default
};
//# sourceMappingURL=chunk-T4FSVDWO.js.map

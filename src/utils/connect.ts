import { connect as originConnect } from "react-redux";

export const connect = (mapStateToProps?: any, mapDispatchToProps?: any) => {
  return (target: any) => {
    return originConnect(mapStateToProps, mapDispatchToProps)(target) as any;
  };
};

import React, { useReducer, useMemo, createContext, useContext } from "react";

import filter from "lodash/filter";
import uniqBy from "lodash/uniqBy";

import PropTypes from "prop-types";

import map from "lodash/map";
import Modal from "./components/modal";

export const CREATE_DIALOG = "CREATE_DIALOG";
export const CLOSE_DIALOG = "CLOSE_DIALOG";
export const REMOVE_DIALOG = "REMOVE_DIALOG";
export const RESET_DIALOGS = "RESET_DIALOGS";

export const DialogContext = createContext();

export function useDialog() {
  const context = useContext(DialogContext);
  if (!context) {
    throw new Error(`useDiaog cannot be rendered outside the DialogProvider`);
  }
  return context;
}

export const dialogReducer = (dialogs = [], action = {}) => {
  switch (action.type) {
    case CREATE_DIALOG:
      return uniqBy(
        [
          ...dialogs,
          {
            ...action.dialog,
            open: true
          }
        ],
        "id"
      );

    case CLOSE_DIALOG:
      return map(dialogs, (dialog) => {
        if (dialog.id === action.id) {
          return { ...dialog, open: false };
        }
        return dialog;
      });

    case REMOVE_DIALOG:
      return filter(dialogs, (dialog) => dialog.id !== action.id);

    case RESET_DIALOGS:
      return [];

    default:
      return dialogs;
  }
};

const DialogProvider = (props) => {
  const { children = null } = props;

  const [dialogs, dispatch] = useReducer(dialogReducer, []);

  const createDialog = (dialog) => dispatch({ type: CREATE_DIALOG, dialog });
  const removeDialog = (id) => {
    dispatch({ type: CLOSE_DIALOG, id });
    setTimeout(() => {
      dispatch({ type: REMOVE_DIALOG, id });
    }, 300);
  };
  const resetDialogs = () => dispatch({ type: RESET_DIALOGS });

  const state = {
    createDialog,
    removeDialog,
    resetDialogs,
    dialogs
  };

  const renderedDialogs = useMemo(
    () =>
      map(dialogs, (dialog) => {
        const { Component, id, ...rest } = dialog;
        return (
          <Modal open key={id} {...rest}>
            {Component}
          </Modal>
        );
      }),
    [dialogs]
  );

  return (
    <DialogContext.Provider value={state}>
      {children}
      {renderedDialogs}
    </DialogContext.Provider>
  );
};

DialogProvider.propTypes = {
  children: PropTypes.any.isRequired,
  ContainerComponent: PropTypes.func
};

DialogProvider.defaultProps = {
  ContainerComponent: ({ children }) => children
};

export default DialogProvider;

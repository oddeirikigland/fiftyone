/**
 * Copyright 2017-2022, Voxel51, Inc.
 */
import {
  lookerPanel,
  lookerPanelContainer,
  lookerPanelVerticalContainer,
  lookerPanelClose,
  lookerHelpPanelItems,
  lookerShortcutValue,
  lookerShortcutTitle,
  lookerShortcutDetail,
  lookerPanelFlex,
  lookerPanelHeader,
} from "./panel.module.css";
import closeIcon from "../../icons/close.svg";
import { Fragment } from "react";

function Close({ onClick }) {
  return (
    <img
      src={closeIcon}
      className={lookerPanelClose}
      title="Close JSON"
      onClick={onClick}
    />
  );
}

export default function HelpPanel({ onClose, items }) {
  return (
    <div
      className={`${lookerPanelContainer}`}
      onClick={(e) => e.stopPropagation()}
    >
      <div className={lookerPanelVerticalContainer}>
        <div className={lookerPanel}>
          <Scroll>
            <Header>Help</Header>
            <Items>
              {items.map((item, idx) => (
                <Item key={`{item.shortcut}-${idx}`} {...item} />
              ))}
            </Items>
          </Scroll>
          <Close onClick={onClose} />
        </div>
      </div>
    </div>
  );
}

function Header({ children }) {
  return <div className={lookerPanelHeader}>{children}</div>;
}
function Scroll({ children }) {
  return <div className={lookerPanelFlex}>{children}</div>;
}
function Items({ children }) {
  return <div className={lookerHelpPanelItems}>{children}</div>;
}
function Item({ shortcut, title, detail }) {
  return (
    <Fragment>
      <div
        className={lookerShortcutValue}
        dangerouslySetInnerHTML={{ __html: shortcut }}
      />
      <div className={lookerShortcutTitle}>{title}</div>
      <div className={lookerShortcutDetail}>{detail}</div>
    </Fragment>
  );
}

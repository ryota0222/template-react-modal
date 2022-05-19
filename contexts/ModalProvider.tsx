import {
  createContext,
  ReactNode,
  useCallback,
  useMemo,
  useState,
  useContext,
} from "react";
import ReactModal from "react-modal";
import { ModalStyle, OverlayStyle } from "../styles/modal.style";

ReactModal.setAppElement("#__next");

type Props = {
  children: ReactNode;
};

type ContextType = {
  openModal: (modal: ReactNode) => void;
  closeModal: () => void;
};

export const ModalContext = createContext<ContextType>({} as ContextType);

export const ModalProvider: React.FC<Props> = ({ children }) => {
  // モーダルの中身
  const [modalNode, setModalNode] = useState<ReactNode | null>(null);
  /**
   * モーダルを開く
   * @param {ReactNode} data モーダルのデータ
   *
   */
  const openModal = useCallback((data: ReactNode) => {
    setModalNode(data);
  }, []);
  /**
   * モーダルを閉じる
   *
   */
  const closeModal = useCallback(() => {
    setModalNode(null);
  }, []);
  // モーダルが開いているかどうかのフラグ
  const isModalOpen = useMemo(() => modalNode !== null, [modalNode]);

  return (
    <ModalContext.Provider value={{ openModal, closeModal }}>
      {children}
      <ReactModal
        isOpen={isModalOpen}
        className={{
          base: "content-base",
          afterOpen: "content-after",
          beforeClose: "content-before",
        }}
        overlayClassName={{
          base: "overlay-base",
          afterOpen: "overlay-after",
          beforeClose: "overlay-before",
        }}
        contentElement={(props, contentEl) => (
          <ModalStyle {...props} width={"800px"} height={"500px"}>
            {contentEl}
          </ModalStyle>
        )}
        overlayElement={(props, contentEl) => (
          <OverlayStyle {...props}>{contentEl}</OverlayStyle>
        )}
        closeTimeoutMS={500}
        onRequestClose={closeModal}
      >
        <>{modalNode}</>
      </ReactModal>
    </ModalContext.Provider>
  );
};

export const useModalContext = () => useContext(ModalContext);

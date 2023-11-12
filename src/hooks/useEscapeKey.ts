import React from "react";

export function useEscapeKey(onClose: (i: boolean) => void) {
  const handleEscKey = React.useCallback(
    (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose(false);
      }
    },
    [onClose]
  );

  React.useEffect(() => {
    document.addEventListener("keyup", handleEscKey, false);

    return () => {
      document.removeEventListener("keyup", handleEscKey, false);
    };
  }, [handleEscKey]);
}

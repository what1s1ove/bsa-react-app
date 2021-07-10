import { KeydownKey } from 'common/enums/enums';
import { useCallback, useEffect, useRef } from 'hooks/hooks';

const useFocusTrap = () => {
  const formRef = useRef(null);

  const setRef = useCallback((node) => {
    formRef.current = node;
  }, [formRef]);

  useEffect(() => {
    const { current: formNode } = formRef;
    const hasFormNode = Boolean(formNode && formNode.elements.length);

    if (!hasFormNode) {
      return;
    }

    const { elements } = formNode;

    const [firstNode] = elements;
    const lastNode = elements[elements.length - 1];

    const onFirstElementFocus = (evt) => {
      if (evt.key === KeydownKey.TAB && evt.shiftKey) {
        evt.preventDefault();

        lastNode.focus();
      }
    };

    const onLastElementFocus = (evt) => {
      if (evt.key === KeydownKey.TAB && !evt.shiftKey) {
        evt.preventDefault();

        firstNode.focus();
      }
    };

    firstNode.focus();

    firstNode.addEventListener(`keydown`, onFirstElementFocus);

    lastNode.addEventListener(`keydown`, onLastElementFocus);

    return () => {
      firstNode.removeEventListener(`keydown`, onFirstElementFocus);

      lastNode.removeEventListener(`keydown`, onLastElementFocus);
    };
  }, [formRef]);

  return setRef;
};

export { useFocusTrap };

import { atom, useAtom } from "jotai";

const count = atom(0);

const useCount = () => useAtom(count);

export default useCount;

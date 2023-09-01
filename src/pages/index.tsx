import { useDispatch, useSelector } from "react-redux";
import { selectedCounterSelector } from "../features/selector";

export default function Home() {
  const dispatch = useDispatch();
  const count = useSelector(selectedCounterSelector);

  return (
    <div>

    </div>
  );
}

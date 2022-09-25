import { FieldCheck, FieldCheckGroup, FieldSelect } from 'components/Field';
import { useState } from 'react';

const App = () => {
  const [rem, setRem] = useState(false);

  return (
    // <FieldCheckGroup
    //   className="m-5"
    //   element={{
    //     type: 'radio',
    //     options: [{ value: '', label: 'All' }]
    //   }}
    // />
    <FieldCheck
      className="m-5"
      type="radio"
      label="a"
      value={rem}
      onChange={e => setRem(e.target.checked)}
    />
  );
};

export default App;

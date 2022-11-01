import { HTMLAttributes } from 'react';

import { Input } from './styles';

interface FilterInputProps extends HTMLAttributes<HTMLInputElement> {}

export function FilterInput(props: FilterInputProps) {
  return <Input type="text" {...props} />;
}

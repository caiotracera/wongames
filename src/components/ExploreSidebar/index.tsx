import { useState } from 'react';
import { FilterList, Close } from '@styled-icons/material-outlined';

import { Button } from '@/components/Button';
import { Checkbox } from '@/components/Checkbox';
import { Heading } from '@/components/Heading';
import { Radio } from '@/components/Radio';

import { ExploreSidebarProps } from '@/components/ExploreSidebar/types';
import * as S from '@/components/ExploreSidebar/styles';

export const ExploreSidebar = ({
  items,
  onFilter,
  initialValues = {},
}: ExploreSidebarProps) => {
  const [values, setValues] = useState(initialValues);
  const [isOpen, setIsOpen] = useState(false);

  const handleChange = (name: string, value: string | boolean) => {
    setValues((s) => ({ ...s, [name]: value }));
  };

  const handleFilter = () => {
    onFilter(values);
    setIsOpen(false);
  };

  return (
    <S.Wrapper mobileFilterIsOpen={isOpen} className="teste">
      <S.Overlay aria-hidden={!isOpen} data-testid="overlay" />
      <S.IconWrapper>
        <FilterList aria-label="open filters" onClick={() => setIsOpen(true)} />
        <Close aria-label="close filters" onClick={() => setIsOpen(false)} />
      </S.IconWrapper>

      <S.Content>
        {items.map((item) => (
          <S.Items key={item.title}>
            <Heading lineBottom lineColor="secondary" size="small">
              {item.title}
            </Heading>

            {item.type === 'checkbox' &&
              item.fields.map((field) => (
                <Checkbox
                  key={field.name}
                  name={field.name}
                  label={field.label}
                  labelFor={field.name}
                  isChecked={!!values[field.name]}
                  onCheck={(v) => handleChange(field.name, v)}
                />
              ))}

            {item.type === 'radio' &&
              item.fields.map((field) => (
                <Radio
                  key={field.name}
                  id={field.name}
                  value={field.name}
                  name={item.name}
                  label={field.label}
                  labelFor={field.name}
                  defaultChecked={field.name === values[item.name]}
                  onChange={() => handleChange(item.name, field.name)}
                />
              ))}
          </S.Items>
        ))}
      </S.Content>

      <S.Footer>
        <Button fullWidth size="medium" onClick={handleFilter}>
          Filter
        </Button>
      </S.Footer>
    </S.Wrapper>
  );
};

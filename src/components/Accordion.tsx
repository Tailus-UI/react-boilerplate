import Accordion from 'tailus-ui/Accordion';
import { ACCORDION_ITEM } from 'constants/data';

export default () => {
  return (
    <Accordion.Root type="single" collapsible className="max-w-md w-full">
      {ACCORDION_ITEM.map((item) => (
        <Accordion.Item value={item.question} key={ACCORDION_ITEM.indexOf(item)}>
          <Accordion.Trigger>{item.question}</Accordion.Trigger>
          <Accordion.Content>{item.answer}</Accordion.Content>
        </Accordion.Item>
      ))}
    </Accordion.Root>
  );
};

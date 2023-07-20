export const DefaultCode = `
<Form>
    {['checkbox', 'radio'].map((type) => (
        <div key={\`default-$\{type}\`} className="mb-3">
            <Form.Check
                type={type}
                id={\`default-$\{type}\`}
                label={\`default $\{type}\`}
            />
            <Form.Check
                disabled
                type={type}
                label={\`disabled $\{type}\`}
                id={\`disabled-default-$\{type}\`}
            />
        </div>
    ))}
</Form>
`.trim();

export const SwitchesCode = `
<Form>
    <Form.Select size="lg">
        <option>Large select</option>
    </Form.Select>
    <br />
    <Form.Select>
        <option>Default select</option>
    </Form.Select>
    <br />
    <Form.Select size="sm">
        <option>Small select</option>
    </Form.Select>
</Form>
 `.trim();

export const InlineCode = `
 <Form>
 {['checkbox', 'radio'].map((type) => (
     <div key={\`inline-$\{type}\`} className="mb-3">
         <Form.Check
             inline
             label="1"
             name="group1"
             type={type}
             id={\`inline-$\{type}-1\`}
         />
         <Form.Check
             inline
             label="2"
             name="group1"
             type={type}
             id={\`inline-$\{type}-2\`}
         />
         <Form.Check
             inline
             disabled
             label="3 (disabled)"
             type={type}
             id={\`inline-$\{type}-3\`}
         />
     </div>
 ))}
</Form>
`.trim();

export const WithoutLabelsCode = `
<Form>
    <Form.Check aria-label="option 1" />
    <Form.Check type="radio" aria-label="radio 1" />
</Form>
 `.trim();
export const CustomizingCode = `
 <Form>
 {['checkbox', 'radio'].map((type) => (
     <div key={type} className="mb-3">
         <Form.Check type={type} id={\`check-api-$\{type}\`}>
             <Form.Check.Input type={type} isValid />
             <Form.Check.Label>{\`Custom api $\{type}\`}</Form.Check.Label>
             <Form.Control.Feedback type="valid">You did it!</Form.Control.Feedback>
         </Form.Check>
     </div>
 ))}
</Form>
`.trim();

export const ChecksRadiosCode = [
	DefaultCode,
	SwitchesCode,
	InlineCode,
	WithoutLabelsCode,
	CustomizingCode
];

export default ChecksRadiosCode;

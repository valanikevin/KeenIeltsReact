export const DefaultSelectCode = `
<Form>
    <Form.Select aria-label="Default select example">
        <option>Open this select menu</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
    </Form.Select>
</Form>
`.trim();

export const SizingSelectCode = `
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

export const FormSelectCode = [DefaultSelectCode, SizingSelectCode];

export default FormSelectCode;

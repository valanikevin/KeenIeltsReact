export const DefaultCode = `
<Form>
    <FloatingLabel
        controlId="floatingInput"
        label="Email address"
        className="mb-3"
    >
        <Form.Control type="email" placeholder="name@example.com" />
    </FloatingLabel>
    <FloatingLabel controlId="floatingPassword" label="Password">
        <Form.Control type="password" placeholder="Password" />
    </FloatingLabel>
</Form>
`.trim();

export const TextareasCode = `
<Form>
    <FloatingLabel controlId="floatingTextarea" label="Comments" className="mb-3">
        <Form.Control as="textarea" placeholder="Leave a comment here" />
    </FloatingLabel>
    <FloatingLabel controlId="floatingTextarea2" label="Comments">
        <Form.Control
            as="textarea"
            placeholder="Leave a comment here"
            style={{ height: '100px' }}
        />
    </FloatingLabel>
</Form>
`.trim();

export const SelectsCode = `
<Form>
    <FloatingLabel controlId="floatingSelect" label="Works with selects">
        <Form.Select aria-label="Floating label select example">
            <option>Open this select menu</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
        </Form.Select>
    </FloatingLabel>
</Form>
`.trim();

export const LayoutCode = `
<FloatingLabel controlId="floatingSelectGrid" label="Works with selects">
    <Form.Select aria-label="Floating label select example">
        <option>Open this select menu</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
    </Form.Select>
</FloatingLabel>
`.trim();

export const CustomizingCode = `
<Form>
    <Form.Floating className="mb-3">
        <Form.Control
            id="floatingInputCustom"
            type="email"
            placeholder="name@example.com"
        />
        <label htmlFor="floatingInputCustom">Email address</label>
    </Form.Floating>
    <Form.Floating>
        <Form.Control
            id="floatingPasswordCustom"
            type="password"
            placeholder="Password"
        />
        <label htmlFor="floatingPasswordCustom">Password</label>
    </Form.Floating>
</Form>
`.trim();

export const FloatingLabelsCode = [
	DefaultCode,
	TextareasCode,
	SelectsCode,
	LayoutCode,
	CustomizingCode
];

export default FloatingLabelsCode;

React-GridTree
===================

React GridTree is a react component built to easily render a table showing the properties of objects in a tree structure.

Check out the [example project](https://github.com/PhillBeck/react-gridtree-example) and the [live demo](https://phillbeck.github.io/react-gridtree-example/)


![](https://i.imgur.com/P2QesHh.png)


Installation
-----
 
```
npm install react-gridtree
```

Usage
-------

Example:
```
<GridTree
	data={[
		{
			name: "item 1"
			qty: 2,
			children: [
				{
					name: "item 1.1",
					qty: 1
				}
			]
		},
		{
			name: "item 2",
			qty: 4
		}
	]}
	options={{
		fields: [
			{ 
				property: 'name',
				displayName: 'Name',
				width: '70%' 
			},
			{
				property: 'qty',
				displayName: 'Quantity',
				format: (value) => value.toFixed(2)
			}
		]
	}}
/>
```

> **Notes:**
> - Styling not yet supported
> - The **children** attribute is reserved for the objects that will be shown inside the parent

----

Props
----------

**data**
Data to be displayed. Should be an array of objects. Each object's `children` property should be an array of nested objects.
```
data = [
	{
		name: "item 1"
		qty: 2,
		children: [
			{
			name: "item 1.1",
			qty: 1
			}
		]
	},
	{
		name: "item 2",
		qty: 4
	}
]
```
----

**options**
Object that can contain the properties:

- **fields** - Required
fields should be an array containing one object for each data property that should be displayed. This object can have the properties:
 - **property** - Required
 The name of the data property (e.g. "name")
 
 - **displayName** - Required
The text to be shown on the table header (e.g. "Name")

 - **width**
The width of the column (e.g. "50%")

 - **format**
 A function that receives the data value, and returns a formatted text to be shown (e.g. `(value) => value.toFixed(2)`

```
options = {
	fields: [
		{ 
			property: 'name',
			displayName: 'Name',
			width: '70%' 
		},
		{
			property: 'qty',
			displayName: 'Quantity',
			format: (value) => value.toFixed(2)
		}
	]
}
```
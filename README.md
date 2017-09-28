React-GridTree
===================

Installation
-----
 
```
npm install react-gridtree
```

Usage
-------


```
<GridTree
  data={[
    {
      Product: 'test1',
      Price: 5.35,
      children: [
        {
          Product: 'childProduct1',
          Price: 6.52,
          children: [
	        {
		      Product: 'childProduct1.1',
		      Price: 5.20
	        }
          ]
        }
      ]
    }, {
      Product: 'test2',
      Price: 2.50,
      children: [
	      {
		      Product: 'childProduct2',
		      Price: 1.21
	      }
      ]
    }
  ]}
  columnWidth={{
    Product: "70%",
	Price: "30%"
  }}
/>
```



> **Notes:**

> - Styling not yet supported
> - The **children** attribute is reserved for the objects that will be shown inside the parent

----
![](https://i.imgur.com/pc1lvM4.png)

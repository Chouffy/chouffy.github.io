Is a [[Software]] that can be used for [[3D Print]]
## Usage
- Create a Body
- Create a Sketch
- Create a Pad
## Workbench
- Different, independent workbenches
- Can be switched with the drop-down list
### Generic
- ![[FreeCAD-1741638321010.webp|25x24]] Variable Set
	- Available in the Model
### Part Design
- Similar to [[Autodesk Fusion 360]] or [[SolidWorks]]
- Can work on parts
	- Pad
		- Add material
	- Pocket
		- Remove materials
		- "Symmetric to plan" to make it both + and - of the plane
	- Chamfer
- Can create new parts
	- Mirror
		- Great for symmetrical objects
#### Usage
- Create Body
	- `Origin`
		- Create coordinate system
		- View/Hide with eye icon or `Space`
- Create Sketch
	- Switch to a 2D view to sketch
- With a Sketch selected
	- Create Pad
		- Will make the sketch 3D
### Sketcher
- Toolbar
	- White tools: drawing
		- Polylines
	- Red tools: constraint
		- *Select object to constraint then constraint type - use the Selection View if needed* 
		- Dimension
			- Variable Set can be use1 by clicking the *fx* icon
			- Use `VarSet.size` for a variable set `VarSet`
				- `VarSet.size+20mm`
		- Symmetric
			- Select in order: Start, End, Middle
	- ![[FreeCAD-1741638970671.webp|26x31]] Create external Geometry
		- "Import" data in the sketch
	- Construction line
		- Hide/Show a line outside the sketch view
	- View Sketch / View Section
		- "Cut" the current body where the sketch surface is
- View
	- Green: fully constraint
### Assembly
- Create an Assembly
- Insert Component
- Create (fixed) joint to link pieces
### Fastener
- Community Addon
- Contains screws and similar
- Properties contains screw size
- Thread is optional as computationally expensive
## Reference
- [Youtube - FreeCAD 1.0 Release - Ultimate Complete Beginner Tutorial - Deltahedra](https://www.youtube.com/watch?v=E14m5hf6Pvo)
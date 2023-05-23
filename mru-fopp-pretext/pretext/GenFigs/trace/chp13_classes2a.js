if (allTraceData === undefined) {
 var allTraceData = {};
 }
 allTraceData["chp13_classes2a"] = {"code": "class Point:\n    \"\"\" Point class for representing and manipulating x,y coordinates. \"\"\"\n\n    def __init__(self):\n\n        self.x = 0\n        self.y = 0\n\np = Point()         # Instantiate an object of type Point\nq = Point()         # and make a second point\n\nprint(p)\nprint(q)\n\nprint(p is q)\n\n", "trace": [{"line": 1, "event": "step_line", "func_name": "<module>", "globals": {}, "ordered_globals": [], "stack_to_render": [], "heap": {}, "stdout": ""}, {"line": 9, "event": "step_line", "func_name": "<module>", "globals": {"Point": ["REF", 1]}, "ordered_globals": ["Point"], "stack_to_render": [], "heap": {"1": ["CLASS", "Point", [], ["__init__", ["REF", 2]]], "2": ["FUNCTION", "__init__(self)", null]}, "stdout": ""}, {"line": 4, "event": "call", "func_name": "__init__", "globals": {"Point": ["REF", 1]}, "ordered_globals": ["Point"], "stack_to_render": [{"func_name": "__init__", "is_parent": false, "frame_id": 1, "parent_frame_id_list": [], "encoded_locals": {"self": ["REF", 3]}, "ordered_varnames": ["self"], "is_zombie": false, "is_highlighted": true, "unique_hash": "__init___f1"}], "heap": {"3": ["INSTANCE", "Point"], "1": ["CLASS", "Point", [], ["__init__", ["REF", 2]]], "2": ["FUNCTION", "__init__(self)", null]}, "stdout": ""}, {"line": 6, "event": "step_line", "func_name": "__init__", "globals": {"Point": ["REF", 1]}, "ordered_globals": ["Point"], "stack_to_render": [{"func_name": "__init__", "is_parent": false, "frame_id": 1, "parent_frame_id_list": [], "encoded_locals": {"self": ["REF", 3]}, "ordered_varnames": ["self"], "is_zombie": false, "is_highlighted": true, "unique_hash": "__init___f1"}], "heap": {"3": ["INSTANCE", "Point"], "1": ["CLASS", "Point", [], ["__init__", ["REF", 2]]], "2": ["FUNCTION", "__init__(self)", null]}, "stdout": ""}, {"line": 7, "event": "step_line", "func_name": "__init__", "globals": {"Point": ["REF", 1]}, "ordered_globals": ["Point"], "stack_to_render": [{"func_name": "__init__", "is_parent": false, "frame_id": 1, "parent_frame_id_list": [], "encoded_locals": {"self": ["REF", 3]}, "ordered_varnames": ["self"], "is_zombie": false, "is_highlighted": true, "unique_hash": "__init___f1"}], "heap": {"3": ["INSTANCE", "Point", ["x", 0]], "1": ["CLASS", "Point", [], ["__init__", ["REF", 2]]], "2": ["FUNCTION", "__init__(self)", null]}, "stdout": ""}, {"line": 7, "event": "return", "func_name": "__init__", "globals": {"Point": ["REF", 1]}, "ordered_globals": ["Point"], "stack_to_render": [{"func_name": "__init__", "is_parent": false, "frame_id": 1, "parent_frame_id_list": [], "encoded_locals": {"self": ["REF", 3], "__return__": null}, "ordered_varnames": ["self", "__return__"], "is_zombie": false, "is_highlighted": true, "unique_hash": "__init___f1"}], "heap": {"3": ["INSTANCE", "Point", ["x", 0], ["y", 0]], "1": ["CLASS", "Point", [], ["__init__", ["REF", 2]]], "2": ["FUNCTION", "__init__(self)", null]}, "stdout": ""}, {"line": 10, "event": "step_line", "func_name": "<module>", "globals": {"Point": ["REF", 1], "p": ["REF", 3]}, "ordered_globals": ["Point", "p"], "stack_to_render": [], "heap": {"1": ["CLASS", "Point", [], ["__init__", ["REF", 2]]], "2": ["FUNCTION", "__init__(self)", null], "3": ["INSTANCE", "Point", ["x", 0], ["y", 0]]}, "stdout": ""}, {"line": 4, "event": "call", "func_name": "__init__", "globals": {"Point": ["REF", 1], "p": ["REF", 3]}, "ordered_globals": ["Point", "p"], "stack_to_render": [{"func_name": "__init__", "is_parent": false, "frame_id": 2, "parent_frame_id_list": [], "encoded_locals": {"self": ["REF", 4]}, "ordered_varnames": ["self"], "is_zombie": false, "is_highlighted": true, "unique_hash": "__init___f2"}], "heap": {"4": ["INSTANCE", "Point"], "1": ["CLASS", "Point", [], ["__init__", ["REF", 2]]], "2": ["FUNCTION", "__init__(self)", null], "3": ["INSTANCE", "Point", ["x", 0], ["y", 0]]}, "stdout": ""}, {"line": 6, "event": "step_line", "func_name": "__init__", "globals": {"Point": ["REF", 1], "p": ["REF", 3]}, "ordered_globals": ["Point", "p"], "stack_to_render": [{"func_name": "__init__", "is_parent": false, "frame_id": 2, "parent_frame_id_list": [], "encoded_locals": {"self": ["REF", 4]}, "ordered_varnames": ["self"], "is_zombie": false, "is_highlighted": true, "unique_hash": "__init___f2"}], "heap": {"4": ["INSTANCE", "Point"], "1": ["CLASS", "Point", [], ["__init__", ["REF", 2]]], "2": ["FUNCTION", "__init__(self)", null], "3": ["INSTANCE", "Point", ["x", 0], ["y", 0]]}, "stdout": ""}, {"line": 7, "event": "step_line", "func_name": "__init__", "globals": {"Point": ["REF", 1], "p": ["REF", 3]}, "ordered_globals": ["Point", "p"], "stack_to_render": [{"func_name": "__init__", "is_parent": false, "frame_id": 2, "parent_frame_id_list": [], "encoded_locals": {"self": ["REF", 4]}, "ordered_varnames": ["self"], "is_zombie": false, "is_highlighted": true, "unique_hash": "__init___f2"}], "heap": {"4": ["INSTANCE", "Point", ["x", 0]], "1": ["CLASS", "Point", [], ["__init__", ["REF", 2]]], "2": ["FUNCTION", "__init__(self)", null], "3": ["INSTANCE", "Point", ["x", 0], ["y", 0]]}, "stdout": ""}, {"line": 7, "event": "return", "func_name": "__init__", "globals": {"Point": ["REF", 1], "p": ["REF", 3]}, "ordered_globals": ["Point", "p"], "stack_to_render": [{"func_name": "__init__", "is_parent": false, "frame_id": 2, "parent_frame_id_list": [], "encoded_locals": {"self": ["REF", 4], "__return__": null}, "ordered_varnames": ["self", "__return__"], "is_zombie": false, "is_highlighted": true, "unique_hash": "__init___f2"}], "heap": {"4": ["INSTANCE", "Point", ["x", 0], ["y", 0]], "1": ["CLASS", "Point", [], ["__init__", ["REF", 2]]], "2": ["FUNCTION", "__init__(self)", null], "3": ["INSTANCE", "Point", ["x", 0], ["y", 0]]}, "stdout": ""}, {"line": 12, "event": "step_line", "func_name": "<module>", "globals": {"Point": ["REF", 1], "p": ["REF", 3], "q": ["REF", 4]}, "ordered_globals": ["Point", "p", "q"], "stack_to_render": [], "heap": {"1": ["CLASS", "Point", [], ["__init__", ["REF", 2]]], "2": ["FUNCTION", "__init__(self)", null], "3": ["INSTANCE", "Point", ["x", 0], ["y", 0]], "4": ["INSTANCE", "Point", ["x", 0], ["y", 0]]}, "stdout": ""}, {"line": 13, "event": "step_line", "func_name": "<module>", "globals": {"Point": ["REF", 1], "p": ["REF", 3], "q": ["REF", 4]}, "ordered_globals": ["Point", "p", "q"], "stack_to_render": [], "heap": {"1": ["CLASS", "Point", [], ["__init__", ["REF", 2]]], "2": ["FUNCTION", "__init__(self)", null], "3": ["INSTANCE", "Point", ["x", 0], ["y", 0]], "4": ["INSTANCE", "Point", ["x", 0], ["y", 0]]}, "stdout": "<__main__.Point object at 0x7f7a0ee8ea90>\n"}, {"line": 15, "event": "step_line", "func_name": "<module>", "globals": {"Point": ["REF", 1], "p": ["REF", 3], "q": ["REF", 4]}, "ordered_globals": ["Point", "p", "q"], "stack_to_render": [], "heap": {"1": ["CLASS", "Point", [], ["__init__", ["REF", 2]]], "2": ["FUNCTION", "__init__(self)", null], "3": ["INSTANCE", "Point", ["x", 0], ["y", 0]], "4": ["INSTANCE", "Point", ["x", 0], ["y", 0]]}, "stdout": "<__main__.Point object at 0x7f7a0ee8ea90>\n<__main__.Point object at 0x7f7a0ee8ec90>\n"}, {"line": 15, "event": "return", "func_name": "<module>", "globals": {"Point": ["REF", 1], "p": ["REF", 3], "q": ["REF", 4]}, "ordered_globals": ["Point", "p", "q"], "stack_to_render": [], "heap": {"1": ["CLASS", "Point", [], ["__init__", ["REF", 2]]], "2": ["FUNCTION", "__init__(self)", null], "3": ["INSTANCE", "Point", ["x", 0], ["y", 0]], "4": ["INSTANCE", "Point", ["x", 0], ["y", 0]]}, "stdout": "<__main__.Point object at 0x7f7a0ee8ea90>\n<__main__.Point object at 0x7f7a0ee8ec90>\nFalse\n"}]}
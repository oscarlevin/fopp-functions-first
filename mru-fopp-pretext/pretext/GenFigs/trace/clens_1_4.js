if (allTraceData === undefined) {
 var allTraceData = {};
 }
 allTraceData["clens_1_4"] = {"code": "def square(x):\n    return x*x\n\nL = [square, abs]\n\nprint(\"****names****\")\nfor f in L:\n    print(f)\n\nprint(\"****call each of them****\")\nfor f in L:\n    print(f(-2))\n\nprint(\"****just the first one in the list****\")\nprint(L[0])\nprint(L[0](3))\n\n", "trace": [{"line": 1, "event": "step_line", "func_name": "<module>", "globals": {}, "ordered_globals": [], "stack_to_render": [], "heap": {}, "stdout": ""}, {"line": 4, "event": "step_line", "func_name": "<module>", "globals": {"square": ["REF", 1]}, "ordered_globals": ["square"], "stack_to_render": [], "heap": {"1": ["FUNCTION", "square(x)", null]}, "stdout": ""}, {"line": 6, "event": "step_line", "func_name": "<module>", "globals": {"square": ["REF", 1], "L": ["REF", 2]}, "ordered_globals": ["square", "L"], "stack_to_render": [], "heap": {"1": ["FUNCTION", "square(x)", null], "2": ["LIST", ["REF", 1], ["REF", 3]], "3": ["FUNCTION", "abs(...)", null]}, "stdout": ""}, {"line": 7, "event": "step_line", "func_name": "<module>", "globals": {"square": ["REF", 1], "L": ["REF", 2]}, "ordered_globals": ["square", "L"], "stack_to_render": [], "heap": {"1": ["FUNCTION", "square(x)", null], "2": ["LIST", ["REF", 1], ["REF", 3]], "3": ["FUNCTION", "abs(...)", null]}, "stdout": "****names****\n"}, {"line": 8, "event": "step_line", "func_name": "<module>", "globals": {"square": ["REF", 1], "L": ["REF", 2], "f": ["REF", 1]}, "ordered_globals": ["square", "L", "f"], "stack_to_render": [], "heap": {"1": ["FUNCTION", "square(x)", null], "2": ["LIST", ["REF", 1], ["REF", 3]], "3": ["FUNCTION", "abs(...)", null]}, "stdout": "****names****\n"}, {"line": 7, "event": "step_line", "func_name": "<module>", "globals": {"square": ["REF", 1], "L": ["REF", 2], "f": ["REF", 1]}, "ordered_globals": ["square", "L", "f"], "stack_to_render": [], "heap": {"1": ["FUNCTION", "square(x)", null], "2": ["LIST", ["REF", 1], ["REF", 3]], "3": ["FUNCTION", "abs(...)", null]}, "stdout": "****names****\n<function square at 0x7f7a0eee13b0>\n"}, {"line": 8, "event": "step_line", "func_name": "<module>", "globals": {"square": ["REF", 1], "L": ["REF", 2], "f": ["REF", 3]}, "ordered_globals": ["square", "L", "f"], "stack_to_render": [], "heap": {"1": ["FUNCTION", "square(x)", null], "2": ["LIST", ["REF", 1], ["REF", 3]], "3": ["FUNCTION", "abs(...)", null]}, "stdout": "****names****\n<function square at 0x7f7a0eee13b0>\n"}, {"line": 7, "event": "step_line", "func_name": "<module>", "globals": {"square": ["REF", 1], "L": ["REF", 2], "f": ["REF", 3]}, "ordered_globals": ["square", "L", "f"], "stack_to_render": [], "heap": {"1": ["FUNCTION", "square(x)", null], "2": ["LIST", ["REF", 1], ["REF", 3]], "3": ["FUNCTION", "abs(...)", null]}, "stdout": "****names****\n<function square at 0x7f7a0eee13b0>\n<built-in function abs>\n"}, {"line": 10, "event": "step_line", "func_name": "<module>", "globals": {"square": ["REF", 1], "L": ["REF", 2], "f": ["REF", 3]}, "ordered_globals": ["square", "L", "f"], "stack_to_render": [], "heap": {"1": ["FUNCTION", "square(x)", null], "2": ["LIST", ["REF", 1], ["REF", 3]], "3": ["FUNCTION", "abs(...)", null]}, "stdout": "****names****\n<function square at 0x7f7a0eee13b0>\n<built-in function abs>\n"}, {"line": 11, "event": "step_line", "func_name": "<module>", "globals": {"square": ["REF", 1], "L": ["REF", 2], "f": ["REF", 3]}, "ordered_globals": ["square", "L", "f"], "stack_to_render": [], "heap": {"1": ["FUNCTION", "square(x)", null], "2": ["LIST", ["REF", 1], ["REF", 3]], "3": ["FUNCTION", "abs(...)", null]}, "stdout": "****names****\n<function square at 0x7f7a0eee13b0>\n<built-in function abs>\n****call each of them****\n"}, {"line": 12, "event": "step_line", "func_name": "<module>", "globals": {"square": ["REF", 1], "L": ["REF", 2], "f": ["REF", 1]}, "ordered_globals": ["square", "L", "f"], "stack_to_render": [], "heap": {"1": ["FUNCTION", "square(x)", null], "2": ["LIST", ["REF", 1], ["REF", 3]], "3": ["FUNCTION", "abs(...)", null]}, "stdout": "****names****\n<function square at 0x7f7a0eee13b0>\n<built-in function abs>\n****call each of them****\n"}, {"line": 1, "event": "call", "func_name": "square", "globals": {"square": ["REF", 1], "L": ["REF", 2], "f": ["REF", 1]}, "ordered_globals": ["square", "L", "f"], "stack_to_render": [{"func_name": "square", "is_parent": false, "frame_id": 1, "parent_frame_id_list": [], "encoded_locals": {"x": -2}, "ordered_varnames": ["x"], "is_zombie": false, "is_highlighted": true, "unique_hash": "square_f1"}], "heap": {"1": ["FUNCTION", "square(x)", null], "2": ["LIST", ["REF", 1], ["REF", 3]], "3": ["FUNCTION", "abs(...)", null]}, "stdout": "****names****\n<function square at 0x7f7a0eee13b0>\n<built-in function abs>\n****call each of them****\n"}, {"line": 2, "event": "step_line", "func_name": "square", "globals": {"square": ["REF", 1], "L": ["REF", 2], "f": ["REF", 1]}, "ordered_globals": ["square", "L", "f"], "stack_to_render": [{"func_name": "square", "is_parent": false, "frame_id": 1, "parent_frame_id_list": [], "encoded_locals": {"x": -2}, "ordered_varnames": ["x"], "is_zombie": false, "is_highlighted": true, "unique_hash": "square_f1"}], "heap": {"1": ["FUNCTION", "square(x)", null], "2": ["LIST", ["REF", 1], ["REF", 3]], "3": ["FUNCTION", "abs(...)", null]}, "stdout": "****names****\n<function square at 0x7f7a0eee13b0>\n<built-in function abs>\n****call each of them****\n"}, {"line": 2, "event": "return", "func_name": "square", "globals": {"square": ["REF", 1], "L": ["REF", 2], "f": ["REF", 1]}, "ordered_globals": ["square", "L", "f"], "stack_to_render": [{"func_name": "square", "is_parent": false, "frame_id": 1, "parent_frame_id_list": [], "encoded_locals": {"x": -2, "__return__": 4}, "ordered_varnames": ["x", "__return__"], "is_zombie": false, "is_highlighted": true, "unique_hash": "square_f1"}], "heap": {"1": ["FUNCTION", "square(x)", null], "2": ["LIST", ["REF", 1], ["REF", 3]], "3": ["FUNCTION", "abs(...)", null]}, "stdout": "****names****\n<function square at 0x7f7a0eee13b0>\n<built-in function abs>\n****call each of them****\n"}, {"line": 11, "event": "step_line", "func_name": "<module>", "globals": {"square": ["REF", 1], "L": ["REF", 2], "f": ["REF", 1]}, "ordered_globals": ["square", "L", "f"], "stack_to_render": [], "heap": {"1": ["FUNCTION", "square(x)", null], "2": ["LIST", ["REF", 1], ["REF", 3]], "3": ["FUNCTION", "abs(...)", null]}, "stdout": "****names****\n<function square at 0x7f7a0eee13b0>\n<built-in function abs>\n****call each of them****\n4\n"}, {"line": 12, "event": "step_line", "func_name": "<module>", "globals": {"square": ["REF", 1], "L": ["REF", 2], "f": ["REF", 3]}, "ordered_globals": ["square", "L", "f"], "stack_to_render": [], "heap": {"1": ["FUNCTION", "square(x)", null], "2": ["LIST", ["REF", 1], ["REF", 3]], "3": ["FUNCTION", "abs(...)", null]}, "stdout": "****names****\n<function square at 0x7f7a0eee13b0>\n<built-in function abs>\n****call each of them****\n4\n"}, {"line": 11, "event": "step_line", "func_name": "<module>", "globals": {"square": ["REF", 1], "L": ["REF", 2], "f": ["REF", 3]}, "ordered_globals": ["square", "L", "f"], "stack_to_render": [], "heap": {"1": ["FUNCTION", "square(x)", null], "2": ["LIST", ["REF", 1], ["REF", 3]], "3": ["FUNCTION", "abs(...)", null]}, "stdout": "****names****\n<function square at 0x7f7a0eee13b0>\n<built-in function abs>\n****call each of them****\n4\n2\n"}, {"line": 14, "event": "step_line", "func_name": "<module>", "globals": {"square": ["REF", 1], "L": ["REF", 2], "f": ["REF", 3]}, "ordered_globals": ["square", "L", "f"], "stack_to_render": [], "heap": {"1": ["FUNCTION", "square(x)", null], "2": ["LIST", ["REF", 1], ["REF", 3]], "3": ["FUNCTION", "abs(...)", null]}, "stdout": "****names****\n<function square at 0x7f7a0eee13b0>\n<built-in function abs>\n****call each of them****\n4\n2\n"}, {"line": 15, "event": "step_line", "func_name": "<module>", "globals": {"square": ["REF", 1], "L": ["REF", 2], "f": ["REF", 3]}, "ordered_globals": ["square", "L", "f"], "stack_to_render": [], "heap": {"1": ["FUNCTION", "square(x)", null], "2": ["LIST", ["REF", 1], ["REF", 3]], "3": ["FUNCTION", "abs(...)", null]}, "stdout": "****names****\n<function square at 0x7f7a0eee13b0>\n<built-in function abs>\n****call each of them****\n4\n2\n****just the first one in the list****\n"}, {"line": 16, "event": "step_line", "func_name": "<module>", "globals": {"square": ["REF", 1], "L": ["REF", 2], "f": ["REF", 3]}, "ordered_globals": ["square", "L", "f"], "stack_to_render": [], "heap": {"1": ["FUNCTION", "square(x)", null], "2": ["LIST", ["REF", 1], ["REF", 3]], "3": ["FUNCTION", "abs(...)", null]}, "stdout": "****names****\n<function square at 0x7f7a0eee13b0>\n<built-in function abs>\n****call each of them****\n4\n2\n****just the first one in the list****\n<function square at 0x7f7a0eee13b0>\n"}, {"line": 1, "event": "call", "func_name": "square", "globals": {"square": ["REF", 1], "L": ["REF", 2], "f": ["REF", 3]}, "ordered_globals": ["square", "L", "f"], "stack_to_render": [{"func_name": "square", "is_parent": false, "frame_id": 2, "parent_frame_id_list": [], "encoded_locals": {"x": 3}, "ordered_varnames": ["x"], "is_zombie": false, "is_highlighted": true, "unique_hash": "square_f2"}], "heap": {"1": ["FUNCTION", "square(x)", null], "2": ["LIST", ["REF", 1], ["REF", 3]], "3": ["FUNCTION", "abs(...)", null]}, "stdout": "****names****\n<function square at 0x7f7a0eee13b0>\n<built-in function abs>\n****call each of them****\n4\n2\n****just the first one in the list****\n<function square at 0x7f7a0eee13b0>\n"}, {"line": 2, "event": "step_line", "func_name": "square", "globals": {"square": ["REF", 1], "L": ["REF", 2], "f": ["REF", 3]}, "ordered_globals": ["square", "L", "f"], "stack_to_render": [{"func_name": "square", "is_parent": false, "frame_id": 2, "parent_frame_id_list": [], "encoded_locals": {"x": 3}, "ordered_varnames": ["x"], "is_zombie": false, "is_highlighted": true, "unique_hash": "square_f2"}], "heap": {"1": ["FUNCTION", "square(x)", null], "2": ["LIST", ["REF", 1], ["REF", 3]], "3": ["FUNCTION", "abs(...)", null]}, "stdout": "****names****\n<function square at 0x7f7a0eee13b0>\n<built-in function abs>\n****call each of them****\n4\n2\n****just the first one in the list****\n<function square at 0x7f7a0eee13b0>\n"}, {"line": 2, "event": "return", "func_name": "square", "globals": {"square": ["REF", 1], "L": ["REF", 2], "f": ["REF", 3]}, "ordered_globals": ["square", "L", "f"], "stack_to_render": [{"func_name": "square", "is_parent": false, "frame_id": 2, "parent_frame_id_list": [], "encoded_locals": {"x": 3, "__return__": 9}, "ordered_varnames": ["x", "__return__"], "is_zombie": false, "is_highlighted": true, "unique_hash": "square_f2"}], "heap": {"1": ["FUNCTION", "square(x)", null], "2": ["LIST", ["REF", 1], ["REF", 3]], "3": ["FUNCTION", "abs(...)", null]}, "stdout": "****names****\n<function square at 0x7f7a0eee13b0>\n<built-in function abs>\n****call each of them****\n4\n2\n****just the first one in the list****\n<function square at 0x7f7a0eee13b0>\n"}, {"line": 16, "event": "return", "func_name": "<module>", "globals": {"square": ["REF", 1], "L": ["REF", 2], "f": ["REF", 3]}, "ordered_globals": ["square", "L", "f"], "stack_to_render": [], "heap": {"1": ["FUNCTION", "square(x)", null], "2": ["LIST", ["REF", 1], ["REF", 3]], "3": ["FUNCTION", "abs(...)", null]}, "stdout": "****names****\n<function square at 0x7f7a0eee13b0>\n<built-in function abs>\n****call each of them****\n4\n2\n****just the first one in the list****\n<function square at 0x7f7a0eee13b0>\n9\n"}]}
if (allTraceData === undefined) {
 var allTraceData = {};
 }
 allTraceData["foppcs_0_clens4_9_1"] = {"code": "def powerof(x,p):\n    power = p     # Another dumb mistake\n    y = x ** power\n    return y\n\npower = 3\nresult = powerof(10,2)\nprint(result)\n\n", "trace": [{"line": 1, "event": "step_line", "func_name": "<module>", "globals": {}, "ordered_globals": [], "stack_to_render": [], "heap": {}, "stdout": ""}, {"line": 6, "event": "step_line", "func_name": "<module>", "globals": {"powerof": ["REF", 1]}, "ordered_globals": ["powerof"], "stack_to_render": [], "heap": {"1": ["FUNCTION", "powerof(x, p)", null]}, "stdout": ""}, {"line": 7, "event": "step_line", "func_name": "<module>", "globals": {"powerof": ["REF", 1], "power": 3}, "ordered_globals": ["powerof", "power"], "stack_to_render": [], "heap": {"1": ["FUNCTION", "powerof(x, p)", null]}, "stdout": ""}, {"line": 1, "event": "call", "func_name": "powerof", "globals": {"powerof": ["REF", 1], "power": 3}, "ordered_globals": ["powerof", "power"], "stack_to_render": [{"func_name": "powerof", "is_parent": false, "frame_id": 1, "parent_frame_id_list": [], "encoded_locals": {"x": 10, "p": 2}, "ordered_varnames": ["x", "p"], "is_zombie": false, "is_highlighted": true, "unique_hash": "powerof_f1"}], "heap": {"1": ["FUNCTION", "powerof(x, p)", null]}, "stdout": ""}, {"line": 2, "event": "step_line", "func_name": "powerof", "globals": {"powerof": ["REF", 1], "power": 3}, "ordered_globals": ["powerof", "power"], "stack_to_render": [{"func_name": "powerof", "is_parent": false, "frame_id": 1, "parent_frame_id_list": [], "encoded_locals": {"x": 10, "p": 2}, "ordered_varnames": ["x", "p"], "is_zombie": false, "is_highlighted": true, "unique_hash": "powerof_f1"}], "heap": {"1": ["FUNCTION", "powerof(x, p)", null]}, "stdout": ""}, {"line": 3, "event": "step_line", "func_name": "powerof", "globals": {"powerof": ["REF", 1], "power": 3}, "ordered_globals": ["powerof", "power"], "stack_to_render": [{"func_name": "powerof", "is_parent": false, "frame_id": 1, "parent_frame_id_list": [], "encoded_locals": {"x": 10, "p": 2, "power": 2}, "ordered_varnames": ["x", "p", "power"], "is_zombie": false, "is_highlighted": true, "unique_hash": "powerof_f1"}], "heap": {"1": ["FUNCTION", "powerof(x, p)", null]}, "stdout": ""}, {"line": 4, "event": "step_line", "func_name": "powerof", "globals": {"powerof": ["REF", 1], "power": 3}, "ordered_globals": ["powerof", "power"], "stack_to_render": [{"func_name": "powerof", "is_parent": false, "frame_id": 1, "parent_frame_id_list": [], "encoded_locals": {"x": 10, "p": 2, "power": 2, "y": 100}, "ordered_varnames": ["x", "p", "power", "y"], "is_zombie": false, "is_highlighted": true, "unique_hash": "powerof_f1"}], "heap": {"1": ["FUNCTION", "powerof(x, p)", null]}, "stdout": ""}, {"line": 4, "event": "return", "func_name": "powerof", "globals": {"powerof": ["REF", 1], "power": 3}, "ordered_globals": ["powerof", "power"], "stack_to_render": [{"func_name": "powerof", "is_parent": false, "frame_id": 1, "parent_frame_id_list": [], "encoded_locals": {"x": 10, "p": 2, "power": 2, "y": 100, "__return__": 100}, "ordered_varnames": ["x", "p", "power", "y", "__return__"], "is_zombie": false, "is_highlighted": true, "unique_hash": "powerof_f1"}], "heap": {"1": ["FUNCTION", "powerof(x, p)", null]}, "stdout": ""}, {"line": 8, "event": "step_line", "func_name": "<module>", "globals": {"powerof": ["REF", 1], "power": 3, "result": 100}, "ordered_globals": ["powerof", "power", "result"], "stack_to_render": [], "heap": {"1": ["FUNCTION", "powerof(x, p)", null]}, "stdout": ""}, {"line": 8, "event": "return", "func_name": "<module>", "globals": {"powerof": ["REF", 1], "power": 3, "result": 100}, "ordered_globals": ["powerof", "power", "result"], "stack_to_render": [], "heap": {"1": ["FUNCTION", "powerof(x, p)", null]}, "stdout": "100\n"}]}
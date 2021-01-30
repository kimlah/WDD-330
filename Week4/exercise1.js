var input = form.elements.search;
input.addEventListener('focus', () => alert('focused'), false);

input.addEventListener('blur', () => alert('blurred'), false);

input.addEventListener('change', () => alert('changed'), false);
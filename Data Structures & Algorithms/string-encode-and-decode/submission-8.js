class Solution {
    encode(strs) {
        if (strs.length === 0) {
            return '';
        }

        return strs.map(s => {
            if (s === '') return '#';
            return s.split('')
                .map(c => c.charCodeAt(0))
                .join('|');
        }).join('/');
    }

    decode(str) {
        if (str === '') return [];

        return str.split('/').map(s => {
            if (s === '#') return '';
            return s.split('|')
                .map(c => String.fromCharCode(Number(c)))
                .join('');
        });
    }
}
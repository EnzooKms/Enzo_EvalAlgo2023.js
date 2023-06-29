"use strict";

// EXO 1 :
// Écrivez une fonction qui prend deux nombres en argument
// et retourne vrai si le premier est supérieur au deuxieme ou faux dans le cas contraire
// f(4,2) retourne true
// f(4,7) retourne false

/**
 * return if the num1 is greater than num2
 * @param {number} num1
 * @param {number} num2
 * @return {boolean}
 */
function plusGrandQue(num1, num2) {
  return num1 > num2;
}

// EXO 2 :
// Implémentez une fonction pour inverser une chaîne de caractères.
// Vous ne devez pas utiliser la méthode reverse
// f("test") retourne "tset"

/**
 * reverse string without use method reverse of prototype
 * @param {string} str
 * @return {string}
 */
function reverse(str) {
  let res = "";
  for (let i = str.length - 1; i >= 0; i--) {
    res += str[i];
  }

  return res;
}

// EXO 3 :
// Un palindrome est un mot qui se lit dans les deux sens ("kayak")
// Écrivez un algorithme pour vérifier si une chaîne de caractères donnée est un palindrome.
// f("kayak") retourne true
// f("test") retourne false

/**
 * return if str is palindrome
 * @param {string} str
 * @return {boolean}
 */
function isPalindrome(str) {
  const medianne = Math.ceil(str.length / 2);
  const firstPart = str.slice(0, medianne - 1);
  const secondPart = str.slice(medianne, str.length);
  const reverse = secondPart.split("").reverse().join("");
  return firstPart === reverse;
}

// EXO 4 :
// Créez une fonction qui retourne le factoriel d'un nombre passé en argument.
// f(5) retourne 120

/**
 * return the factoriel of number
 * @param {number} number
 * @return {number}
 * @example factoriel(5) => 1 * 2 * 3 * 4 * 5 => 120
 */
function factoriel(number) {
  let res = 1;

  for (let i = 1; i <= number; i++) {
    res *= i;
  }

  return res;
}

// EXO 5 :
// Implémentez une fonction pour vérifier si un nombre est premier.
// Un nombre premier est un nombre qui est divisible uniquement par 1 ou par lui même
// f(11) retourne true
// f(20) retourne false

/**
 * return if the number is premier
 * @param {number} number
 * @return {boolean}
 */
function isPremier(number) {
  let isPremier = true;

  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      isPremier = false;
      break;
    }
  }

  return isPremier;
}

// EXO 6 :
// Écrire une fonction qui renvoie le plus grand nombre dans un tableau.
// Vous ne devez pas utiliser de boucle

/**
 * return the max of an array without loop
 * @param {number[]} numbers
 * @return {number}
 */
function max(numbers) {
  return Math.max(...numbers);
}

// EXO 7 :
// Un anagramme est une phrase composée des même lettres qu'une autre phrase dans un ordre différent
// "La crise économique" et "Le scénario comique" sont des anagrammes
// Écrivez une fonction retourne vrai si deux chaînes de caractères sont des anagrammes l'une de l'autre ou faux dans le cas contraire.
// https://fr.wikipedia.org/wiki/Anagramme

/**
 * return if 2 sentences are anagram
 * @param {string} str1
 * @param {string} str2
 * @return {boolean}
 * @link https://fr.wikipedia.org/wiki/Anagramme
 */
function anagramme(str1, str2) {
  const Letter1 = {};
  const Letter2 = {};

  for (const letter of str1) {
    if (letter === " ") {
      continue;
    }
    const lowercase = letter.toLowerCase();
    if (!Letter1[lowercase]) {
      Letter1[lowercase] = 1;
    } else {
      Letter1[lowercase] += 1;
    }
  }

  for (const letter of str2) {
    if (letter === " ") {
      continue;
    }
    const lowercase = letter.toLowerCase();
    if (!Letter2[lowercase]) {
      Letter2[lowercase] = 1;
    } else {
      Letter2[lowercase] += 1;
    }
  }

  let isSame = true;

  for (const key in Letter1) {
    if (Letter1[key] !== Letter2[key]) {
      isSame = false;
      break;
    }
  }
  return isSame;
}

// EXO 8 :
// Écrivez une fonction pour déterminer si une chaîne de caractères donnée ne contient que des caractères uniques.
// f("test") retourne faux car le caractère t est présente 2 fois
// f("hopital") retourne vrai car chaque caractère est présent 1 seule fois
// f("Test") retourne vrai car chaque caractère est présent 1 seule fois (t n'est pas pareil que T)

/**
 * return if all character is only one time at str
 * @param {string} str
 * @return {boolean}
 */
function isUnique(str) {
  /**
   * @type {Object}
   */
  const Letter = {};

  for (const letter of str) {
    if (letter === " ") {
      continue;
    }

    if (!Letter[letter]) {
      Letter[letter] = 1;
    } else {
      Letter[letter] += 1;
    }
  }

  let isUnique = true;

  for (const key in Letter) {
    if (Letter[key] > 1) {
      isUnique = false;
      break;
    }
  }

  return isUnique;
}

// EXO 9 :
// Implémentez une fonction qui retourne le deuxieme plus grand élément d'un tableau de nombre entier.
// f([5,6,2,9,23]) retourne 9 car 23 est le plus grand et 9 est le deuxieme plus grand

/**
 * return the second min of arr
 * @param {number[]} arr
 * @return {number}
 */
function secondMin(arr) {
  const sort = arr.sort((a, b) => b - a);
  return sort[1];
}

// EXO 10 :
// Écrivez une fonction pour calculer la somme de tous les nombres pairs d'un tableau.
// f([3,2,6]) retoune 8 (2+6)

/**
 * return the sum of pair number
 * @param {number[]} arr
 * @return {number}
 */
function sumPair(arr) {
  let res = 0;

  for (const number of arr) {
    if (number % 2 === 0) {
      res += number;
    }
  }

  return res;
}

// EXO 11 :
// Créez une fonction pour inverser l'ordre des mots dans une phrase.
// Vous pouvez utliser les méthode disponible dans les prototypes String et Array
// f("bonjour je vais bien") affiche "bien vais je bonjour"
// la fonction ne retourne rien

/**
 * reverse all word
 * @param {string} str
 * @return {string}
 */
function reverseWord(str) {
  const split = str.split(" ");
  const reverse = split.reverse();
  const join = reverse.join(" ");

  return join;
}

// EXO 12 :
// Implémentez une fonction pour supprimer toutes les occurrences d'un élément donné d'un tableau.
// f([3,5,7,3,1,3,5], 3) retourne  [5,7,1,5] car on a supprimer tout les 3 (deuxieme argument)
// Vous devez utiliser la méthode filter()

/**
 * remove all number in arr match with the reference
 * @param {number[]} arr
 * @param {number} reference
 * @return {number[]}
 */
function filter(arr, reference) {
  return arr.filter((el) => el !== reference);
}

// EXO 13
// Écrivez un algorithme pour trouver le nombre de voyelles dans une chaîne de caractères.
// f("bonjour") retourne 3 car il y 1 "a", 2 "o" et un "u"
// f("voyage") retourne 3 car il y a 1 "e", 1 "a" et 1 "o"

/**
 * return the number of voyelles str contains
 * @param {string} str
 * @return {number}
 */
function voyelles(str) {
  const voyelles = {
    a: 0,
    e: 0,
    i: 0,
    o: 0,
    u: 0,
    y: 0,
  };

  for (const letter of str) {
    if (typeof voyelles[letter] === "number") {
      voyelles[letter] += 1;
    }
  }

  let res = 0;

  for (const key in voyelles) {
    res += voyelles[key];
  }

  return res;
}

// EXO 14
// Implémentez une fonction qui permet de trouver le plus petit nombre
// d'un tableau à 2 dimensions passé en argument
// ex: f([[1,2,3],[5,6,7],[39,-23,0]]) retourne -23

/**
 *  return the min number of 2 dimensional array
 * @param {Array<number[]>} arr
 * @return {number}
 */
function min(arr) {
  const flat = arr.flat(1);
  const sort = flat.sort((a, b) => a - b);

  return sort[0];
}

// EXO 15
// Implémentez une fonction pour rechercher tous les index d'un nombre donné (premier argument)
// dans un tableau de nombre entier (deuxieme argument).
// f(3,[3,5,3,6]) retourne [0,2] car le 3 est présent à l'index 0 et à l'index 2

/**
 * find all the index that match the reference
 * @param {number} reference
 * @param {number[]} arr
 * @return {number}
 */
function findIndex(reference, arr) {
  const index = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === reference) {
      index.push(i);
    }
  }

  return index;
}

// EXO 16
// Implémentez une fonction pour calculer le nombre de chiffres d'un nombre entier.
// f(102543) retourne 6 car 102543 contient 6 chiffres

/**
 * calculate the length of number
 * @param {number} number
 */
function sumLength(number) {
  return number.toString().length;
}

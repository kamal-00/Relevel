function getMedian(ar1, ar2, n)
{
	var i = 0; 
	var j = 0; 
	var count;
	var m1 = -1, m2 = -1;

	for (count = 0; count <= n; count++)
	{

		if (i == n)
		{
			m1 = m2;
			m2 = ar2[0];
			break;
		}

	
		else if (j == n)
		{
			m1 = m2;
			m2 = ar1[0];
			break;
		}

		if (ar1[i] <= ar2[j])
		{
			m1 = m2; 
			m2 = ar1[i];
			i++;
		}
		else
		{
			m1 = m2;
			m2 = ar2[j];
			j++;
		}
	}

	return (m1 + m2)/2;
}

var ar1 = [11, 12, 25, 26, 38];
var ar2 = [2, 23, 17, 20, 45];
var n1 = ar1.length;
var n2 = ar2.length;
if (n1 == n2)
	console.log("Median is "+ getMedian(ar1, ar2, n1));
else
	console.log("unequal size");
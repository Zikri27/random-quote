import { FaSquareXTwitter } from 'react-icons/fa6';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';
import { useState } from 'react';

const QuoteBox = () => {
  const [quote, setQuote] = useState({
    quote: 'Balas dendam terbaik adalah menjadikan dirimu lebih baik.',
    author: 'Ali Bin Abi Thalib',
  });

  const quotes = [
    {
      quote: 'Seseorang yang berani membuang satu jam waktunya tidak mengetahui nilai dari kehidupan.',
      author: 'Charles Darwin',
    },
    {
      quote: 'Tidak apa-apa untuk merayakan kesuksesan, tapi lebih penting untuk memperhatikan pelajaran tentang kegagalan.',
      author: 'Bill Gates',
    },
    {
      quote:
        'Bila kaum muda yang telah belajar di sekolah dan menganggap dirinya terlalu tinggi dan pintar untuk melebur dengan masyarakat yang bekerja dengan cangkul dan hanya memiliki cita-cita yang sederhana, maka lebih baik pendidikan itu tidak diberikan sama sekali.',
      author: 'Tan Malaka',
    },
    {
      quote: 'Hanya pendidikan yang bisa menyelamatkan masa depan, tanpa pendidikan Indonesia tak mungkin bertahan.',
      author: 'Najwa Shihab',
    },
    {
      quote: 'Pendidikan adalah satu-satunya kunci untuk membuka dunia ini, serta paspor untuk menuju kebebasan.',
      author: 'Oprah Winfrey',
    },
    {
      quote: 'Kebahagiaan kita tergantung pada diri kita sendiri.',
      author: 'Aristoteles',
    },
    {
      quote: 'Uang tidak pernah membuat manusia bahagia. Uang tidak ada bersifat untuk menghasilkan kebahagiaan. Semakin seseorang memilikinya, semakin dia menginginkannya.',
      author: 'Benjamin Franklin',
    },
    {
      quote: 'Orang yang tak pernah membaca buku sama buruknya dengan mereka yang tak bisa membaca buku.',
      author: 'Mark Twain',
    },
    {
      quote: 'Fokuslah menjadi produktif, bukan sekadar sibuk saja.',
      author: 'Tim Ferris',
    },
    {
      quote: 'Belajarlah sebanyak kau bisa selagi muda, karena hidup nanti menjadi terlalu sibuk.',
      author: 'Dana Stewart Scott',
    },
    {
      quote: 'Masa depan memberi penghargaan bagi mereka yang terus maju. Saya tidak punya waktu untuk mengasihani diri sendiri. Saya tidak punya waktu untuk mengeluh.',
      author: 'Barack Obama',
    },
    {
      quote: 'Tuntutlah ilmu, disaat kamu miskin, ia akan menjadi hartamu. Disaat kamu kaya, ia akan menjadi perhiasanmu.',
      author: 'Luqman Al-Hakim',
    },
    {
      quote: 'Barangsiapa tidak mau merasakan pahitnya belajar, ia akan merasakan hinanya kebodohan sepanjang hidupnya.',
      author: "Imam Syafi'i rahimahullah",
    },
  ];

  const randomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[randomIndex]);
  };

  return (
    <div id="quote-box">
      <div className="quote-text">
        <i>
          <FaQuoteLeft size={25} />
        </i>
        <br />
        <span id="text"> {quote.quote}</span>
        <br />
        <i>
          <FaQuoteRight size={25} />
        </i>
      </div>
      <div className="quote-author">
        -<span id="author"> {quote.author}</span>
      </div>
      <div id="buttons">
        <a href="twitter.com/intent/tweet" id="tweet-quote" target="_blank">
          <FaSquareXTwitter size={40} className="x" />
        </a>
        <button id="new-quote" onClick={randomQuote}>
          New Quote
        </button>
      </div>
    </div>
  );
};

export default QuoteBox;

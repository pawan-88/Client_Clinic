const serviceData = [
  {
    title: 'Root Canal Treatment',
    image: 'images/root canel.jpg',
    alt: 'Root Canal Treatment in Pune',
    shortDesc: 'Save your natural tooth with our painless, advanced root canal treatment.',
    fullDesc: `Our <strong>painless root canal treatment in Pune</strong> helps remove infected pulp while preserving your natural tooth structure.  
    Using laser-assisted root canal therapy, we ensure minimal discomfort and quick healing.<br>
    <strong>Benefits include:</strong><br>
    ✅ Save natural teeth and prevent extractions<br>
    ✅ Relieve pain caused by deep cavities or injury<br>
    ✅ Restore chewing function and prevent further damage`,
    cta: 'Book your root canal consultation today!',
  },
  {
    title: 'Teeth Cleaning & Polishing',
    image: 'images/teeth white.jpg',
    alt: 'Teeth Cleaning & Polishing in Pune',
    shortDesc: 'Deep cleaning to remove plaque, tartar, and stains for a healthier smile.',
    fullDesc: `Regular <strong>teeth cleaning in Pune</strong> removes plaque, tartar, and stains, preventing gum disease, cavities, and bad breath.<br>
    <strong>Benefits include:</strong><br>
    ✅ Prevents gum disease & tooth decay<br>
    ✅ Removes yellow stains from coffee, tea, and smoking<br>
    ✅ Ensures long-lasting freshness & oral hygiene`,
    cta: `Schedule your professional teeth cleaning at Dr.Dhanshree's Dental Clinic!`,
  },
  {
    title: 'Braces',
    image: 'images/braces.jpg',
    alt: 'Braces in Pune',
    shortDesc: 'Align your teeth with metal, ceramic, or self-ligating braces for a perfect smile.',
    fullDesc: `<strong>Advanced braces in Pune</strong> help you achieve a perfect bite and confident smile.<br>
    <strong>Types of Braces:</strong><br>
    ✅ Metal Braces – Strong & cost-effective<br>
    ✅ Ceramic Braces – Less visible, tooth-colored<br>
    ✅ Self-Ligating Braces – Faster treatment with minimal discomfort`,
    cta: `Start your smile transformation with braces at Dr.Dhanshree's Dental Clinic!`,
  },
  {
    title: 'Tooth Extraction',
    image: 'images/Extraction.jpg',
    alt: 'Tooth Extraction in Pune',
    shortDesc: 'Safe and painless removal of damaged or impacted teeth with modern techniques.',
    fullDesc: `<strong>Safe and pain-free tooth extractions in Pune</strong>, including <strong>wisdom tooth removal</strong> and <strong>severely decayed teeth extraction</strong>.<br>
    <strong>Benefits:</strong><br>
    ✅ Quick healing with minimal pain<br>
    ✅ Necessary before orthodontic treatments like braces<br>
    ✅ Prevents infection from damaged teeth`,
    cta: `Consult now for a painless tooth extraction at Dr.Dhanshree's Dental Clinic!`,
  },
  {
    title: 'Dental Implants',
    image: 'images/Dental-Implants.jpg',
    alt: 'Dental Implants in Pune',
    shortDesc: 'Permanently replace missing teeth with implants that look and function like natural teeth.',
    fullDesc: `<strong>Dental implants in Pune</strong> offer a permanent solution for missing teeth, restoring both function and aesthetics.<br>
    <strong>Benefits:</strong><br>
    ✅ Long-lasting and natural-looking tooth replacement<br>
    ✅ Preserves jawbone health and prevents bone loss<br>
    ✅ Restores full chewing ability and confident smile`,
    cta: `Schedule a consultation for dental implants at Dr.Dhanshree's Dental Clinic!`,
  },
  {
    title: 'Dental Bridge',
    image: 'images/Bridge.jpg',
    alt: 'Dental Bridge in Pune',
    shortDesc: 'Fill the gap left by missing teeth with a custom bridge, restoring function and aesthetics.',
    fullDesc: `<strong>Dental bridge in Pune</strong> is a fixed restoration that replaces missing teeth by anchoring artificial teeth to adjacent natural teeth.<br>
    <strong>Benefits:</strong><br>
    ✅ Restores missing teeth without surgery<br>
    ✅ Prevents shifting of adjacent teeth<br>
    ✅ Provides a natural-looking and durable solution`,
    cta: `Book a consultation for a dental bridge at Dr.Dhanshree's Dental Clinic!`,
  },
  {
    title: 'Teeth Whitening',
    image: 'images/Whitening.jpg',
    alt: 'Teeth Whitening in Pune',
    shortDesc: 'Brighten your smile with our advanced whitening treatments, removing stubborn stains.',
    fullDesc: `<strong>Teeth whitening in Pune</strong> removes stains caused by coffee, tea, smoking, and aging.<br>
    <strong>Benefits:</strong><br>
    ✅ Removes deep stains for a whiter smile<br>
    ✅ Safe, quick, and effective whitening solutions<br>
    ✅ Boosts confidence with a radiant smile`,
    cta: `Book your teeth whitening session at Dr.Dhanshree's Dental Clinic today!`,
  },
  {
    title: 'Clear Aligners',
    image: 'images/Clear Aligners.jpg',
    alt: 'Clear Aligners in Pune',
    shortDesc: 'Discreetly straighten your teeth with clear, removable aligners—no metal wires needed.',
    fullDesc: `<strong>Clear aligners in Pune</strong> are a comfortable and nearly invisible solution for teeth straightening.<br>
    <strong>Benefits:</strong><br>
    ✅ Virtually invisible and removable<br>
    ✅ No dietary restrictions or discomfort from metal brackets<br>
    ✅ Faster results with advanced orthodontic planning`,
    cta: `Start your clear aligner journey at Dr.Dhanshree's Dental Clinic today!`,
  },
  {
    title: 'Dentures',
    image: 'images/Dentures.jpeg',
    alt: 'Dentures in Pune',
    shortDesc: 'Custom-made, comfortable dentures to restore your smile and improve oral function.',
    fullDesc: `<strong>Custom dentures in Pune</strong> offer a natural-looking solution for missing teeth.<br>
    <strong>Benefits:</strong><br>
    ✅ Full & partial denture options available<br>
    ✅ Comfortable, natural-looking fit<br>
    ✅ Improves chewing, speaking, and overall oral health`,
    cta: `Schedule a denture consultation at Dr.Dhanshree's Dental Clinic today!`,
  },
  {
    title: 'Dental Filling',
    image: 'images/Dental Filling.jpeg',
    alt: 'Dental Filling in Pune',
    shortDesc: 'Protect your teeth from decay with durable, natural-looking fillings.',
    fullDesc: `Our tooth-colored dental fillings restore damaged teeth and prevent further decay while blending naturally with your smile.<br>
    ✅ Long-lasting, durable materials<br>
    ✅ Comfortable and pain-free procedure`,
    cta: `Schedule your dental filling appointment at Dr.Dhanshree's Dental Clinic today!`,
  },
  {
    title: 'Dental Veneers',
    image: 'images/veneers.jpg',
    alt: 'Dental Veneers in Pune',
    shortDesc: 'Transform your smile with porcelain veneers for whiter, straighter teeth.',
    fullDesc: `Custom-made dental veneers are a fast and effective way to correct imperfections.<br>
    ✅ Correct chipped, stained or misaligned teeth<br>
    ✅ Natural, stunning appearance<br>
    ✅ Minimal preparation required`,
    cta: `Book your consultation for dental veneers at Dr.Dhanshree's Dental Clinic today!`,
  },
  {
    title: 'Child Dentistry',
    image: 'images/Child Dentistry.jpg',
    alt: 'Child Dentistry in Pune',
    shortDesc: 'Gentle pediatric dental care for growing smiles.',
    fullDesc: `Specialized care for infants, toddlers and teens.<br>
    ✅ Child-friendly staff and clinic<br>
    ✅ Preventive and corrective care<br>
    ✅ Makes dental visits fun and stress-free`,
    cta: `Schedule your child's dental appointment at Dr.Dhanshree's Dental Clinic today!`,
  },
];

export default serviceData;

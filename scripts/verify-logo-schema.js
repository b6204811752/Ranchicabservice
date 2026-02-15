/**
 * Logo Schema Verification Script
 * 
 * This script verifies that Organization schema with logo is properly implemented
 * Run this in your browser console on any page to verify
 */

function verifyLogoSchema() {
  console.log('🔍 Verifying Logo Schema Implementation...\n');
  
  const results = {
    passed: [],
    failed: [],
    warnings: []
  };

  // Check for JSON-LD scripts
  const jsonLdScripts = document.querySelectorAll('script[type="application/ld+json"]');
  console.log(`📄 Found ${jsonLdScripts.length} JSON-LD scripts\n`);

  if (jsonLdScripts.length === 0) {
    results.failed.push('❌ No JSON-LD schema found on page');
  } else {
    results.passed.push(`✅ Found ${jsonLdScripts.length} JSON-LD scripts`);
  }

  // Parse and check each schema
  let hasOrganization = false;
  let hasLogo = false;
  let logoUrl = '';

  jsonLdScripts.forEach((script, index) => {
    try {
      const schema = JSON.parse(script.textContent);
      console.log(`\n📋 Schema ${index + 1}:`, schema['@type'] || 'Graph');

      // Check if it's a graph with Organization
      if (schema['@graph']) {
        schema['@graph'].forEach(item => {
          if (item['@type'] === 'Organization') {
            hasOrganization = true;
            console.log('  ✅ Organization found');
            
            if (item.logo) {
              hasLogo = true;
              // Handle both string and object logo formats
              logoUrl = typeof item.logo === 'string' ? item.logo : item.logo.url;
              console.log('  ✅ Logo found:', logoUrl);
              
              // Verify logo is a full URL
              if (logoUrl && logoUrl.startsWith('http')) {
                results.passed.push('✅ Logo URL is absolute (starts with http)');
              } else {
                results.failed.push('❌ Logo URL should be absolute (https://)');
              }
              
              // Check logo dimensions if available
              if (item.logo.width && item.logo.height) {
                console.log(`  ✅ Logo dimensions: ${item.logo.width}x${item.logo.height}`);
                
                if (item.logo.width >= 112 && item.logo.height >= 112) {
                  results.passed.push('✅ Logo meets minimum size (112x112)');
                } else {
                  results.failed.push('❌ Logo too small (minimum 112x112)');
                }

                // Check for square aspect ratio (1:1 is best)
                if (item.logo.width === item.logo.height) {
                  results.passed.push('✅ Logo is square (1:1 ratio - optimal)');
                } else {
                  results.warnings.push('⚠️  Logo not square (1:1 ratio recommended)');
                }
              }
            } else {
              console.log('  ❌ No logo property found');
            }
          }

          if (item['@type'] === 'LocalBusiness' && item.logo) {
            console.log('  ✅ LocalBusiness logo found:', item.logo);
          }
        });
      } 
      // Check single Organization schema
      else if (schema['@type'] === 'Organization') {
        hasOrganization = true;
        console.log('  ✅ Organization found');
        
        if (schema.logo) {
          hasLogo = true;
          logoUrl = typeof schema.logo === 'string' ? schema.logo : schema.logo.url;
          console.log('  ✅ Logo found:', logoUrl);
        }
      }
    } catch (e) {
      results.failed.push(`❌ Error parsing schema ${index + 1}: ${e.message}`);
    }
  });

  // Final checks
  if (hasOrganization) {
    results.passed.push('✅ Organization schema present');
  } else {
    results.failed.push('❌ No Organization schema found');
  }

  if (hasLogo) {
    results.passed.push('✅ Logo property found in schema');
  } else {
    results.failed.push('❌ No logo property in Organization schema');
  }

  // Check Open Graph image
  const ogImage = document.querySelector('meta[property="og:image"]');
  if (ogImage) {
    console.log('\n🖼️  Open Graph Image:', ogImage.content);
    results.passed.push('✅ Open Graph image present');
  } else {
    results.warnings.push('⚠️  No Open Graph image found');
  }

  // Check Twitter Card image
  const twitterImage = document.querySelector('meta[name="twitter:image"]');
  if (twitterImage) {
    console.log('🐦 Twitter Card Image:', twitterImage.content);
    results.passed.push('✅ Twitter card image present');
  }

  // Print Results
  console.log('\n' + '='.repeat(60));
  console.log('📊 VERIFICATION RESULTS');
  console.log('='.repeat(60));

  if (results.passed.length > 0) {
    console.log('\n✅ PASSED CHECKS:');
    results.passed.forEach(item => console.log('  ' + item));
  }

  if (results.warnings.length > 0) {
    console.log('\n⚠️  WARNINGS:');
    results.warnings.forEach(item => console.log('  ' + item));
  }

  if (results.failed.length > 0) {
    console.log('\n❌ FAILED CHECKS:');
    results.failed.forEach(item => console.log('  ' + item));
  }

  console.log('\n' + '='.repeat(60));
  
  if (results.failed.length === 0) {
    console.log('🎉 ALL CRITICAL CHECKS PASSED!');
    console.log('Your logo schema is properly implemented.');
    console.log('\nNext steps:');
    console.log('1. Test with Google Rich Results: https://search.google.com/test/rich-results');
    console.log('2. Submit to Google Search Console');
    console.log('3. Wait 1-4 weeks for Google to re-index');
  } else {
    console.log('⚠️  ISSUES FOUND - Please fix failed checks above');
  }

  console.log('='.repeat(60) + '\n');

  // Test logo URL accessibility
  if (logoUrl) {
    console.log('🔗 Testing logo URL accessibility...');
    fetch(logoUrl)
      .then(response => {
        if (response.ok) {
          console.log('✅ Logo URL is accessible (HTTP ' + response.status + ')');
        } else {
          console.log('❌ Logo URL returned HTTP ' + response.status);
        }
      })
      .catch(err => {
        console.log('❌ Error accessing logo URL:', err.message);
      });
  }
}

// Auto-run the verification
verifyLogoSchema();

// Export for manual use
if (typeof module !== 'undefined' && module.exports) {
  module.exports = verifyLogoSchema;
}
